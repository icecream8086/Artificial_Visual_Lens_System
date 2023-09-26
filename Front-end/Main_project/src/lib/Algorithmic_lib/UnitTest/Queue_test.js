const { Queue } = require('../Queue.js');
const { Queue_ovf } = require('../Queue.js');

try {
  console.log("``````````````````````````````````````````Test [1]``````````````````````````````````````````");
  const queue = new Queue(5); // 指定队列长度为 5
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.forEach(item => {
    console.log(item);
  });

  console.log("````````````````````````````````enqueue````````````````````````````````");

  queue.enqueue(6); // 抛出异常，队列已满
  queue.enqueue(7); // 抛出异常，队列已满
  queue.enqueue(8); // 抛出异常，队列已满
  queue.enqueue(9); // 抛出异常，队列已满
  queue.enqueue(10); // 抛出异常，队列已满
  queue.forEach(item => {
    console.log(item);
  });
  console.log("```````````````````````````````enqueue2```````````````````````````````");

  console.log("```````````````````````````````dequeue2```````````````````````````````");

  console.log(queue.dequeue()); // 输出 1
  console.log(queue.dequeue(1)); // 输出 2
  console.log(queue.dequeue(2)); // 输出 3
  console.log("``````````````````````````````````````````");

  console.log("size " + queue.size); // 输出 3
  console.log("``````````````````````````````````````````");
  queue.forEach(item => {
    console.log(item);
  });
  console.log("`````````````````````````````````size`````````````````````````````````");
  console.log("``````````````````````````````````````````Test [1]``````````````````````````````````````````");

}
catch (error) {
  console.log(error.message);
}

try {
  console.log("``````````````````````````````````````````Test [2]``````````````````````````````````````````");

  const queue = new Queue_ovf(5); // 指定队列长度为 5
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.forEach(item => {
    console.log(item);
  });

  console.log("````````````````````````````````enqueue````````````````````````````````");

  queue.enqueue(6); // 抛出异常，队列已满
  queue.enqueue(7); // 抛出异常，队列已满
  queue.enqueue(8); // 抛出异常，队列已满
  queue.enqueue(9); // 抛出异常，队列已满
  queue.enqueue(10); // 抛出异常，队列已满
  queue.forEach(item => {
    console.log(item);
  });
  console.log("```````````````````````````````enqueue2```````````````````````````````");

  console.log("```````````````````````````````dequeue2```````````````````````````````");

  console.log(queue.dequeue()); // 输出 1
  console.log(queue.dequeue(1)); // 输出 2
  console.log(queue.dequeue(2)); // 输出 3
  console.log("``````````````````````````````````````````");

  console.log("size " + queue.size); // 输出 3
  console.log("``````````````````````````````````````````");
  queue.forEach(item => {
    console.log(item);
  });
  console.log("`````````````````````````````````size`````````````````````````````````");
  console.log("``````````````````````````````````````````Test [2]``````````````````````````````````````````");

}
catch (error) {
  console.log(error.message);
}