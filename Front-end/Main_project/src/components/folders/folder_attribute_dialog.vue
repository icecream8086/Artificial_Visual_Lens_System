<template>
  <el-button plain @click="outerVisible = true">
    Open the outer Dialog
  </el-button>

  <el-dialog v-model="outerVisible" title="文件夹档案" width="800">
    <span>{{ frolderName }}</span>
    <!-- <el-dialog v-model="innerVisible" width="500" title="Inner Dialog" append-to-body>
      <span>This is the inner Dialog</span>
    </el-dialog> -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">关闭</el-button>
        <el-button type="primary">
          修改信息
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
  
<script  setup>
import { ref } from 'vue'

const outerVisible = ref(false)
// const innerVisible = ref(false)
let frolderName = ref("This is the outer Dialog").value;
</script>
