<!-- ComponentB.vue -->
<template>
    <div>
      <p>{{ message }}</p>
      <button @click="sendMessage">Send message to parent</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String
    },
    methods: {
      sendMessage() {
        this.$emit('message-sent', 'Hello from ComponentB')
      }
    }
  }
  </script>