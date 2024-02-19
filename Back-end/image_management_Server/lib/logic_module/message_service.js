// @ts-nocheck
const WebSocketServer = require("../../routes/ws");
const redis_ = require("../datasource/redis_connection_promise")

class MessageQueue {
  constructor() {
    this.redis = redis_;
    this.timer = null;
  }

  async publish(queueName, message, uid = null, groupId = null) {
    try {
      const messageId = await this.redis.incr('messageId');
      const messageObj = {
        id: messageId,
        uid,
        groupId,
        message,
      };
      await this.redis.zadd(queueName, messageId, JSON.stringify(messageObj));
      console.log(`Message published to ${queueName}:`, messageObj);
      WebSocketServer.sendMessage(`/telegraph/consume/${queueName}`, messageObj);

    } catch (error) {
      throw new Error('Error while publishing message: \n'+error);
    }
  }



  stopConsume() {
    if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
    }
  }

  async clear(queueName) {
    try {
      await this.redis.del(queueName);
      console.log(`Cleared messages in ${queueName}`);
    } catch (error) {
      throw new Error('Error while publishing message: \n'+error);
    }
  }
}

module.exports = { MessageQueue };