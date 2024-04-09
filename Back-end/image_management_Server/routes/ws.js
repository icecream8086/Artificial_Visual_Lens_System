// @ts-nocheck
const WebSocket = require('ws');
const url = require('url');
const {validateToken_tf} = require('../lib/logic_module/check_user');
const { spawn } = require('child_process');

function isValidCloseCode(code) {
    // 根据RFC 6455，有效的关闭代码应该在1000-1015的范围内
    return code >= 1000 && code <= 1015;
}

class WebSocketServer {
    static wss;
    static commands = {};
    static connections = [];
    // 改成静态类
    static async init_ws(server, debug = true) {
        this.wss = new WebSocket.Server({
            server,
            verifyClient: async (info, done) => {
                try {
                    const parsedUrl = url.parse(info.req.url, true);
                    const isValid = await validateToken_tf(parsedUrl.query.token, parsedUrl.query.uid);
                    console.log('isValid', isValid);
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
                const route = req.url; // 获取路由信息
                ws.route = route; // 将路由信息存储到ws对象中
                this.connections.push(ws); // 将新的连接添加到connections数组中
            
                ws.on('close', (code, reason) => {
                    if (!isValidCloseCode(code)) {
                        console.error(`Invalid close code: ${code}. Reason: ${reason}`);
                    }
                });
                ws.on('error', (error) => {
                    console.error(`WebSocket error: ${error.message}`);
                });

                if (!req.valid) {
                    ws.send(JSON.stringify({ route: 'error', data: req.error ? req.error.message : 'Invalid token' }));
                    ws.close();
                    return;
                }

                ws.on('message', message => {
                    let msg;
                    try {
                        msg = JSON.parse(message);
                    } catch (error) {
                        console.error(`Invalid JSON: ${message}`);
                        ws.send(JSON.stringify({ route: 'error', data: 'Invalid JSON' }));
                        return;
                    }
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
    static broadcast(route, message) {
        this.connections.forEach(connection => {
            if (connection.readyState === WebSocket.OPEN && connection.route === route) {
                connection.send(message);
            }
        });
    }
}

module.exports = WebSocketServer;