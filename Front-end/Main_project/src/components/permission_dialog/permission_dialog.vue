<template>
    <div v-if="debug">
      <el-button plain @click="outerVisible = true">
      Open the outer Dialog
    </el-button>
    </div>
  
    <el-dialog v-model="outerVisible" title="文件夹档案" :width="400">
      <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <el-card :width="360">
            <el-scrollbar >
              <div>
            <p><span>只读权限: {{ folder_guest_r }}</span></p>
            <p><span>读写权限: {{ folder_guest_rw }}</span></p>
            <p><span>读写删除权限: {{ folder_guest_rwd }}</span></p>
          </div>
            </el-scrollbar>
          </el-card>
          <span>为确保唯一性,只使用UID标识</span>

        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
      <el-dialog v-model="innerVisible" width="500" title="修改文件夹信息" append-to-body>
        <span>编辑文件夹信息</span>

        <div><el-button > 修改信息</el-button></div>
      </el-dialog>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outerVisible = false">关闭</el-button>
          <el-button type="primary" @click="innerVisible=true">
            修改信息
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
    
  <script  setup>
  import axios from 'axios';
  const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
  import { ref, onMounted, defineProps, watch } from 'vue'
  // import { ElNotification } from 'element-plus';
  let outerVisible = ref(false);
  let innerVisible = ref(false);
  let folder_guest_r = ref("");
  let folder_guest_rw = ref("");
  let folder_guest_rwd = ref("");
  let requestPath = ref("");
  let debug = false;
  
  
  
  
  const props = defineProps({
    visitables: {
      type: Boolean,
      required: true,
      default: false
    },
    path: {
      type: String,
      required: true,
      default: ""
    }
  })
  
  function getFolderOwner() {
  
    if (debug) {
      console.log("requestPath.value: " + requestPath.value);
    console.log("props.path: " + props.path);
    }
    const localStorageJSON = new LocalStorageJSON();
            let tokens = localStorageJSON.read('token');
            let UID = localStorageJSON.read('UID');
    axios.post('/api'+'/api/file/watchfolder_permission', {
        headers: {
          'uid': UID,
          'token': tokens,
        },
          path: requestPath.value
      }
      ).then((res) => {
      // console.log(res.data.result);
  //     {
  //     "result": [
  //         {
  //             "folder_guest_r": null,
  //             "folder_guest_rw": null,
  //             "folder_guest_rwd": "[\"user_3\"]"
  //         }
  //     ]
  // }
      folder_guest_r.value = res.data.result[0].folder_guest_r;
      folder_guest_rw.value = res.data.result[0].folder_guest_rw;
      folder_guest_rwd.value = res.data.result[0].folder_guest_rwd;
      
    }).catch((err) => {
      console.log(err);
    });
  }
  
  
  
  // function success() {
  //   ElNotification({
  //     title: 'Success',
  //     message: '更新文件夹状态信息成功',
  //     type: 'success',
  //   })
  // }
  
  // function fail() {
  //   ElNotification({
  //     title: 'Error',
  //     message: '更新文件夹状态信息失败 \n 有错误发生',
  //     type: 'error',
  //   })
  // }
  watch(() => props.path, (newVal) => {
    requestPath.value = newVal;
    getFolderOwner();
  },
  )
  watch(() => props.visitables, (newVal) => {
    if (newVal) {
      outerVisible.value = outerVisible.value ? false : true;
      getFolderOwner();
    }
  }
  ,
  )
  onMounted(() => {
    // getFolderAttribute();
    requestPath.value = props.path;
    outerVisible.value = props.visitables;
    // console.log("outerVisible.value: " + outerVisible.value);
    // console.log("props.visitables: " + props.visitables.value);
  })
  </script>