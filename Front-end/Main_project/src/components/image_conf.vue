<template>
  <el-scrollbar :height="600">
    <el-row>
      <el-col :span=spans v-for="w in srcList" :key="w">
        <div class="item_image_box">
          <image_box :dataset_name="w.FolderName" :preview_image="w.preview_path" :paths="w.Path"></image_box>
        </div>
      </el-col>
      <!-- <el-col :span="3">
      <div class="item_image_box">
        <image_box :dataset_name="a" :preview_image="w"></image_box>
      </div>
    </el-col> -->
  </el-row>
  </el-scrollbar>
  <div>
    <input type="file" @change="handleFileUpload">
    <button @click="uploadFile">上传</button>
    <div><el-input v-model="path" autocomplete="请输入路径"></el-input></div>
  </div> 
</template>
<script>
import axios from 'axios';
import image_box from './sub_components/image_box.vue';
import { ElNotification } from 'element-plus';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');

export default {
  name: "image_conf",
  data() {
    return {
      size: 4,
      spans: 3,
      srcList: [
      ],
      selectedFile: null,
      path: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      let formData = new FormData();
      formData.append('files', this.selectedFile);

      axios.post('/api'+'/api/file/uploadFile', formData, {
        headers: {
          'uid': '3',
          'token': '123',
          'path': '/'+this.path,
          'flag': '',
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
        if (response.data.code === 200) {
          ElNotification({
            title: '成功',
            message: '上传成功',
            type: 'success'
          });
        }    else     if (response.status === 401) {
          ElNotification({
            title: '失败',
            message: '请先登录',
            type: 'error'
          });
        }
        if (response.status === 409) {
          ElNotification({
            title: '失败',
            message: '文件已经存在',
            type: 'error'
          });
        } if (response.status === 500) {
          ElNotification({
            title: '失败',
            message: '服务器错误',
            type: 'error'
          });
        }
        if (response.status === 402) {
          ElNotification({
            title: '失败',
            message: '文件格式不允许',
            type: 'error'
          });
        }

      }).catch(error => {
        console.log(error.response);
        ElNotification({
          title: '失败',
          message: '上传失败',
          type: 'error'
        });

      });
    }
  },
  components: {
    image_box,
  },
  props: {

  },
  watch: {
    spans(val) {
      this.spans = val;
    }
  },
  mounted() {
    const localStorageJSON = new LocalStorageJSON();
      let tokens = localStorageJSON.read('token');
      let UID = localStorageJSON.read('UID');
    axios.get('/api' + '/api/file/listfolder', {
      headers: {
        'UID': UID,
        'token': tokens,

      }
    }).then((res) => {
      for (let i = 0; i < res.data.result.length; i++) {
        this.srcList.push(res.data.result[i]);
        
      }

    }).catch((err) => {
      console.log(err);
    });



  },
};

</script>
<style scoped>
.text {
  font-size: 16px;
}

.item_image_box {
  padding: 3px 0;
  overflow-wrap: break-word;
}

</style>
  