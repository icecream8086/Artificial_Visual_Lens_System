<template>
  <el-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog
    v-model="centerDialogVisible"
    title="创建用户"
    width="60%"
    align-center
  >
    <span
      >创建用户信息
      <el-row>
        <el-col :span="8"
          ><p>用户名</p>
          <el-input v-model="input" placeholder="Please input" />
        </el-col>
        <el-col :span="8"
          ><p>邮箱</p>
          <el-input v-model="input" placeholder="Please input" />
        </el-col>
        <el-col :span="8"
          ><p>密码</p>
          <el-input v-model="input" placeholder="Please input" />
        </el-col>
        <el-col :span="8">
          <el-checkbox v-model="checked1">用户首次登录必须修改密码</el-checkbox>
        </el-col>
        <el-col :span="8">
          <el-checkbox v-model="checked1">账户是否封禁</el-checkbox>
        </el-col>
        <el-col :span="8">
          <el-checkbox v-model="checked1">不允许密码登录</el-checkbox>
        </el-col>
        <el-col :span="8"
          ><p>用户组 id</p>
          <el-input v-model="input" placeholder="Please input" />
        </el-col>
        <el-col :span="8"> </el-col>
      </el-row>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
  <script>
import { ref } from "vue";

export default {
  setup() {
    const centerDialogVisible = ref(false);

    return {
      centerDialogVisible,
    };
  },
};
</script>
  
  <style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
  