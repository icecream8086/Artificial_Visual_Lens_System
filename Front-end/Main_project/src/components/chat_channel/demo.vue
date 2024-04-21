<template>
  <div class="chat-app">
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        用户 {{ message.user_name }}: {{ message.message }}  <p>{{ message.timestamp }}</p>
      </li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Type a message" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { wsTarget } from '@/../config.js';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');

export default {
  name: 'ChatApp',
  data() {
    return {
      ws: null,
      newMessage: '',
      messages: [],
      groupId: 'catia'
    }
  },
 // ws://10.21.78.154:3000/?token=&uid=3
 created() {
  const localStorageJSON = new LocalStorageJSON();
      let tokens = localStorageJSON.read('token');
      let UID = localStorageJSON.read('UID');
    this.ws = new WebSocket(wsTarget+'/server_ws'+'?token='+tokens+'&uid='+UID);
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.data && message.data.groupId === this.groupId) {
        this.messages.push(message.data);
      }
    };
  },
  watch: {
    messages() {
      // This function will be called whenever the 'messages' array changes.
      // You can add your code here to update the screen.
    }
  },
  methods: {
    sendMessage() {
      this.ws.send(this.newMessage);
      this.newMessage = '';
    }
  }
}
</script>

<style scoped>
.chat-app {
  /* Add your styles here */
}
</style>