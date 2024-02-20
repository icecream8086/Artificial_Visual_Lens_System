class TaskQueue {
    constructor() {
        this.tasks = [];
        this.currentTaskIndex = 0;
    }

    add(task) {
        if (typeof task !== 'function') {
            throw new Error('Task must be a function');
        }
        this.tasks.push(task);
    }

    async run() {
        while (this.currentTaskIndex < this.tasks.length) {
            const task = this.tasks[this.currentTaskIndex];
            try {
                await task();
            } catch (error) {
                this.errorHandler(error);
            } finally {
                this.currentTaskIndex++;
            }
        }
    }

    cancel() {
        this.tasks.splice(this.currentTaskIndex, this.tasks.length - this.currentTaskIndex);
    }

    errorHandler(error) {
        console.error('An error occurred:', error);
    }
}
module.exports = TaskQueue;
// // 创建一个 TaskQueue 实例
// const queue = new TaskQueue();

// // 添加任务到队列
// queue.add(() => console.log('Task 1'));
// queue.add(() => console.log('Task 2'));
// queue.add(() => console.log('Task 3'));

// // 执行队列中的任务
// queue.run();

// queue.add(() => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async task');
//         resolve();
//     }, 1000);
// }));