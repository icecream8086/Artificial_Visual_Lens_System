// @ts-nocheck
const WebSocket = require('ws');

class WebSocketServer {
    static wss;
    // 改成静态类
    static async init_ws(server, debug = false) {
        this.wss = new WebSocket.Server({ server });

        //必须传入server才会启动,否则会睡觉
        return new Promise((resolve, reject) => {
            this.wss.on('connection', ws => {
                ws.on('message', message => {
                    const msg = JSON.parse(message);
                    switch (msg.route) {
                        case 'route1':
                            // 处理route1的消息
                            if(debug){
                                console.log('Received message for route1: ', msg.data);
                            }
                            break;
                        case 'route2':
                            // 处理route2的消息
                            if(debug){
                                console.log('Received message for route2: ', msg.data);
                            }
                            break;
                        // 其他路由...
                    }
                });

                // ws.send(JSON.stringify({ route: 'init', data: 'Connection established' }));
                resolve();
            });

            this.wss.on('error', reject);
        });
    }

    // 添加新的函数，用于发送消息到指定的路由
    static sendMessage(route, message ,debug=false) {
        if(debug){
            console.log(`Sending message to ${this.wss.clients.size} clients...`);
        }
        this.wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                if(debug){
                console.log(`Sending message to client: ${message}`);
                }
                client.send(JSON.stringify({ route, data: message }));
            } else {
                if(debug){
                    console.log(`Skipping client with state: ${client.readyState}`);
                }
            }
        });
    }
}

module.exports = WebSocketServer;