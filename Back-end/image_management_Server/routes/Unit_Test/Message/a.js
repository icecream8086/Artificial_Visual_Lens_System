// @ts-nocheck
const {MessageQueue} = require('../../../lib/logic_module/message_service');

const messageQueue = new MessageQueue();
async function TestModule() {
  // 发布消息
  messageQueue.publish('myQueue', 'Hello, World!', 'user1'); // 指定 UID
  messageQueue.publish('myQueue', 'Hello, Redis!', null, 'group1'); // 指定 Group ID

  // 消费消息
  messageQueue.consume('myQueue', 'user1', null, (message) => {
    console.log(`Received message for user1: ${message}`);
  });

  messageQueue.consume('myQueue', null, 'group1', (message) => {
    console.log(`Received message for group1: ${message}`);
  });

  // 清除消息记录
  setTimeout(() => {
    messageQueue.clear('myQueue');
  }, 5000);

  //循环消费消息队列
}

TestModule();