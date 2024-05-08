<!-- PageA.vue -->
<template>
    <div>
      <component-b :message="message" @message-sent="handleMessage"></component-b>
    </div>
  </template>
  
  <script src="./lib/script_A.js"></script>
<!-- 
    GitHub Copilot: 
    这段代码是一个Vue组件，
    它的模板中包含了一个名为component-b的子组件。这个子组件使用了props和事件进行与父组件的通信。具体来说，
    它接受了一个名为message的prop，
    并在页面上显示它。当用户点击按钮时，
    子组件会通过$emit方法触发名为message-sent的事件，
    并将消息作为参数传递。父组件监听这个事件，
    并在控制台上打印接收到的消息。这个组件还定义了一个名为message的data属性，
    它的初始值为'Hello from PageA'。这个属性可以在组件的模板中使用，
    也可以通过props传递给子组件。
 -->