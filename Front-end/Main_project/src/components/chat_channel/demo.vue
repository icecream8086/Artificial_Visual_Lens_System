<template>
  <div class="chat-app">
      <div>
        <el-scrollbar :height="450">
          <ul>
      <li v-for="(message, index) in messages" :key="index">
        用户 {{ message.user_name }}: {{ message.message }} <p>{{ message.timestamp }}</p>
      </li>
    </ul>
        </el-scrollbar>
      </div>
      <div>
        <el-row>
      <el-col :span="20"> <el-input v-model="newMessage" placeholder="Type a message"></el-input></el-col>
      <el-col :span="4"> <el-button @click="sendMessage"
          style="width: max-content;height: fit-content;">Send</el-button>
      </el-col>
    </el-row>
      </div>
      <div>
        <el-row>
      <el-col :span="4"> <el-input v-model="groupIds" placeholder="channel name"></el-input></el-col>
      <el-col :span="4"> <el-button @click="change_channel"
          style="width: max-content;height: fit-content;">切换频道</el-button>
      </el-col>
    </el-row>
      </div>

  </div>
</template>

<script>
import { wsTarget } from '@/../config.js';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
import axios from 'axios';
import { ElNotification } from 'element-plus';
const localStorageJSON = new LocalStorageJSON();

export default {
  name: 'ChatApp',
  data() {
    return {
      ws: null,
      newMessage: '',
      messages: [],
      groupId: 'catia',
      groupIds: 'catia'
    }
  },
  // ws:// 10.21.78.154:3000/?token=&uid=3
  created() {

    let tokens = localStorageJSON.read('token');
    let UID = localStorageJSON.read('UID');
    this.ws = new WebSocket(wsTarget + '/server_ws' + '?token=' + tokens + '&uid=' + UID);
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.data && message.data.groupId === this.groupId) {
        this.messages.push(message.data);
        console.log(this.messages);
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

      const params = new URLSearchParams();
      params.append('message', this.newMessage);
      params.append('group_id', this.groupId);
      params.append('queueName', '1234');

      axios.post('/api' + '/telegraph/publish', params, {
        headers: {
          uid: localStorageJSON.read('UID'),
          'token': localStorageJSON.read('token'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(() => {
          this.newMessage = '';
          ElNotification({
            title: 'Success',
            message: 'Message sent successfully',
            type: 'success'
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    ,change_channel(){
      this.groupId = this.groupIds;
      this.messages = []; // Clear messages 

      ElNotification({
        title: 'Success',
        message: 'Channel changed successfully',
        type: 'success'
      });
    }
  },
  props: {
    _groupId: {
      type: String,
      required: true,
      default: 'catia'
    }
  },
  mounted() {
    this.groupId = this._groupId;
  }
}
</script>

<style scoped>
.chat-app {
  /* Add your styles here */
}
</style>