<template>
  <el-card class="timelines" style="overflow: auto;">
    <el-timeline v-for="(message, index) in messages" :key="index">
      <sub_Progress_Area :_message="message.message" :_timestamp="message.timestamp" :_user_name="message.user_name"></sub_Progress_Area>
    </el-timeline>
  </el-card>
</template>

<script>
import { wsTarget } from '@/../config.js';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
import sub_Progress_Area from '@/components/sub_components/Progress_Area/sub_Progress_Area.vue';
export default {
  name: 'Progress_Area',
  data() {
    return {
      ws: null,
      newMessage: '',
      messages: [],
 
    }
  },
  components: {
    sub_Progress_Area,
  },
  created() {
    const localStorageJSON = new LocalStorageJSON();
            let tokens = localStorageJSON.read('token');
            let UID = localStorageJSON.read('UID');
    this.ws = new WebSocket(wsTarget+'/server_ws'+'?token='+tokens+'&uid='+UID);
    this.ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.route === '/publish/train_models'|| message.route === '/publish/test_models' || message.route === '/publish/sync_folder') {
        this.messages.push(message.data);
      }
    };
  },
  methods: {
    sendMessage() {
      this.ws.send(this.newMessage);
      this.newMessage = '';
    },
    
  },
}
//
// {
//     "route": "/publish/train_models",
//     "data": {
//         "user_name": "Avatar",
//         "timestamp": "2024-04-10T10:42:56.472Z",
//         "message": "test model ./model/ResNet-0602.pth is in progress"
//     }
// }

</script>

<style>
.timelines {
  /* 添加下拉框和大小限制 */
  width: 100%;
  height: 100%;
}
</style>
