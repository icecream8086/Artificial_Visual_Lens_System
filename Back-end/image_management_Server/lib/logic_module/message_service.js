const redis_ = require("../datasource/redis_connection_promise")

/**
 * Represents a message queue that allows publishing, consuming and clearing messages.
 */
class MessageQueue {
  /**
   * Creates a new instance of MessageQueue. */
  constructor() {
    this.redis = redis_;
  }

  /**
   * Publishes a message to the specified queue.
   * @param {string} queueName - The name of the queue to publish the message to.
   * @param {string} message - The message to publish.
   * @param {string|null} uid - The user ID associated with the message (optional).
   * @param {string|null} groupId - The group ID associated with the message (optional).
   */
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
    } catch (error) {
      throw new Error('Error while publishing message: \n'+error);
    }
  }

  /**
   * Consumes messages from the specified queue that match the given user ID or group ID.
   * @param {string} queueName - The name of the queue to consume messages from.
   * @param {string|null} uid - The user ID to filter messages by (optional).
   * @param {string|null} groupId - The group ID to filter messages by (optional).
   * @param {function} callback - The callback function to invoke for each consumed message.
   */
  async consume(queueName, uid = null, groupId = null, callback) {
    try {
      console.log(`Waiting for messages in ${queueName}...`);

      setInterval(async () => {
        const messages = await this.redis.zrange(queueName, 0, -1);
        for (const message of messages) {
          const messageObj = JSON.parse(message);
          if (messageObj.uid === uid || messageObj.groupId === groupId) {
            callback(messageObj.message);
            await this.redis.zrem(queueName, message);
          }
        }
      }, 1000);
    } catch (error) {
      throw new Error('Error while publishing message: \n'+error);
    }
  }

  /**
   * Clears all messages from the specified queue.
   * @param {string} queueName - The name of the queue to clear.
   */
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