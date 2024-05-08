<template>
  <div v-if="debug">
    <el-button plain @click="outerVisible = true">
    Open the outer Dialog
  </el-button>
  </div>

  <el-dialog v-model="outerVisible" title="文件夹档案" :width="450">
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <el-card :width="410">
          <el-scrollbar >
            <div>
          <p><span>文件夹名: {{ frolderName }}</span></p>
          <p><span>sha256: {{ sha256sum }}</span></p>
          <p><span>主题: {{ subjects }}</span></p>
          <p><span>分类: {{ classification }}</span></p>
          <p><span>标题: {{ label }}</span></p>
          <p><span>标记: {{ remark }}</span></p>
          <p><span>所有者: {{ owner }}</span></p>
          <p><span>真实路径: {{ realpath }}</span></p>
        </div>
          </el-scrollbar>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <el-dialog v-model="innerVisible" width="500" title="修改文件夹信息" append-to-body>
      <span>编辑文件夹信息</span>
      <div>文件夹名<el-input v-model="frolderName_modify"></el-input></div>
      <div>主题<el-input v-model="subjects_modify"></el-input></div>
      <div>分类<el-input v-model="remark_modify"></el-input></div>
      <div>标题<el-input v-model="label_modify"></el-input></div>
      <div><el-button @click="modifyFolderAttribute" :size="large"> 修改信息</el-button></div>
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
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
import axios from 'axios';
import { ref, onMounted, defineProps, watch } from 'vue'
import { ElNotification } from 'element-plus';
let outerVisible = ref(false);
let innerVisible = ref(false);
let frolderName = ref("");
let sha256sum = ref("");
let subjects = ref("");
let classification = ref("");
let label = ref("");
let remark = ref("");
let owner = ref("");
let requestPath = ref("");
let realpath = ref("");
let debug = false;

let frolderName_modify = ref("");
let subjects_modify = ref("");
let classification_modify = ref("");
let label_modify = ref("");
let remark_modify = ref("");



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

function getFolderAttribute() {

  if (debug) {
    console.log("requestPath.value: " + requestPath.value);
  console.log("props.path: " + props.path);
  }
  const localStorageJSON = new LocalStorageJSON();
      let tokens = localStorageJSON.read('token');
      let UID = localStorageJSON.read('UID');

  axios.post('/api'+'/api/file/get_folder_info', {
      headers: {
        'uid': UID,
        'token': tokens,
      },
        path: requestPath.value
    }
    ).then((res) => {
    // console.log(res.data.result);
    frolderName.value = res.data.result[0].title;
    sha256sum.value = res.data.result[0].sha256;
    subjects.value = res.data.result[0].subject;
    classification.value = res.data.result[0].classification;
    label.value = res.data.result[0].label;
    remark.value = res.data.result[0].remarks;
    owner.value=res.data.result[0].owner_id;
    realpath.value=requestPath.value;

  }).catch((err) => {
    console.log(err);
  });
}




function modifyFolderAttribute() {
  const localStorageJSON = new LocalStorageJSON();
      let tokens = localStorageJSON.read('token');
      let UID = localStorageJSON.read('UID');
  axios.post('/api'+'/api/file/modify_folder_info', {

      headers: {
        'uid': UID,
        'token': tokens,
      },
      path: requestPath.value,
      title: frolderName_modify.value,
      subject: subjects_modify.value,
      classification: classification_modify.value,
      label: label_modify.value,
      remarks: remark_modify.value,
      
    }

    ).then(() => {
    // console.log(res.data.result);  
    success();
  }).catch(() => {
    // console.log(err);
    fail();
  });
}

function success() {
  ElNotification({
    title: 'Success',
    message: '更新文件夹状态信息成功',
    type: 'success',
  })
}

function fail() {
  ElNotification({
    title: 'Error',
    message: '更新文件夹状态信息失败 \n 有错误发生',
    type: 'error',
  })
}
watch(() => props.path, (newVal) => {
  requestPath.value = newVal;
  getFolderAttribute();
},
)
watch(() => props.visitables, (newVal) => {
  if (newVal) {
    outerVisible.value = outerVisible.value ? false : true;
    getFolderAttribute();
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