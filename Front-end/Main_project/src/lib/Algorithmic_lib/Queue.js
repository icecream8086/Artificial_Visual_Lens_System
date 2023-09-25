class Queue {
    constructor(length = Infinity) {
        this.length = length;
        this.items = [];
        this.head = 0;
        this.tail = 0;
      }
    
      enqueue(item) {
        if (this.tail - this.head >= this.length) {
          throw new Error('Queue is full');
        }
        this.items[this.tail % this.length] = item;
        this.tail++;
      }
    
      dequeue(index = 0) {
        if (this.tail === this.head) {
          throw new Error('Queue is empty');
        }
        if (index < 0 || index >= this.items.length) {
          throw new Error('Index out of range');
        }
        const item = this.items[(this.head + index) % this.length];
        this.items[(this.head + index) % this.length] = undefined;
        return item;
      }
    
      forEach(callback) {
        for (let i = this.head; i < this.tail; i++) {
          const item = this.items[i % this.length];
          callback(item, i - this.head, this.items);
        }
      }
    
      get size() {
        return this.tail - this.head;
      }
}

class Queue_ovf {
        constructor(length = Infinity) {
            this.length = length;
            this.items = [];
            this.head = 0;
            this.tail = 0;
        }
    
        enqueue(item) {
            if (this.tail - this.head >= this.length) {
                this.dequeue();
            }
            this.items[this.tail % this.length] = item;
            this.tail++;
        }
    
        dequeue(index = 0) {
            if (this.tail === this.head) {
                throw new Error('Queue is empty');
            }
            if (index < 0 || index >= this.items.length) {
                throw new Error('Index out of range');
            }
            const item = this.items[(this.head + index) % this.length];
            this.items[(this.head + index) % this.length] = undefined;
            this.head++;
            return item;
        }
    
        forEach(callback) {
            for (let i = this.head; i < this.tail; i++) {
                const item = this.items[i % this.length];
                callback(item, i - this.head, this.items);
            }
        }
    
        get size() {
            return this.tail - this.head;
        }
    }

module.exports = { Queue, Queue_ovf };
