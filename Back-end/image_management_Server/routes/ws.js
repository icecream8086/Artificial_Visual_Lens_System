// @ts-nocheck
const WebSocket = require('ws');
const validateToken = require('../lib/logic_module/check_user');
const { spawn } = require('child_process');
const { error_control } = require('../lib/life_cycle/error_control');

class WebSocketServer {
    static wss;
    static commands = {};
    // 改成静态类
    static async init_ws(server, debug = false) {
        this.wss = new WebSocket.Server({
            server,
            verifyClient: async (info, done) => {
                try {
                    const isValid = await validateToken(info.req.headers.token, info.req.headers.uid);
                    info.req.valid = isValid;
                } catch (error) {
                    info.req.error = error;
                    info.req.valid = false;
                }
                done(true);
            }
        });

        //必须传入server才会启动,否则会睡觉
        return new Promise((resolve, reject) => {
            this.wss.on('connection', (ws, req) => {
                if (!req.valid) {
                    ws.send(JSON.stringify({ route: 'error', data: req.error ? req.error.message : 'Invalid token' }));
                    ws.close();
                    return;
                }

                ws.on('message', message => {
                    const msg = JSON.parse(message);
                    switch (msg.route) {
                        case 'command':
                            if (msg.id === undefined) {
                                ws.send(JSON.stringify({ route: 'error', data: 'Missing command id' }));
                                return;
                            }
                            // 当收到命令时，运行命令并将结果发送回客户端
                            this.commands[msg.id] = spawn(msg.data, { shell: true }); // 使用唯一的标识符存储命令
                            this.commands[msg.id].stdout.on('data', data => {
                                ws.send(JSON.stringify({ route: 'output', data: data.toString() }));
                            });
                            this.commands[msg.id].stderr.on('data', data => {
                                ws.send(JSON.stringify({ route: 'output', data: data.toString() }));
                            });
                            break;
                        case 'abort':
                            // 当收到中断命令时，中断当前正在运行的命令
                            if (this.commands[msg.id]) {
                                if (msg.id === undefined) {
                                    ws.send(JSON.stringify({ route: 'error', data: 'Missing command id' }));
                                    return;
                                }
                                this.commands[msg.id].kill();
                                delete this.commands[msg.id];
                            }
                            break;
                        // 其他路由...
                    }
                });

                resolve();
            });

            this.wss.on('error', reject);
        });
    }

    // 添加新的函数，用于发送消息到指定的路由
    static sendMessage(route, message, debug = false) {
        if (debug) {
            console.log(`Sending message to ${this.wss.clients.size} clients...`);
        }
        this.wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                if (debug) {
                    console.log(`Sending message to client: ${message}`);
                }
                client.send(JSON.stringify({ route, data: message }));
            } else {
                if (debug) {
                    console.log(`Skipping client with state: ${client.readyState}`);
                }
            }
        });
    }
}

module.exports = WebSocketServer;