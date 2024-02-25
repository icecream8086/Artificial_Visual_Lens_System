<template>
  <div>
    <el-collapse>
      <el-collapse-item title="用户组">
        <el-collapse-item title="搜索用户组">
          <p>搜索框</p>
          <p>搜索返回结果</p>
        </el-collapse-item>
        <p>下拉框(显示出所有的 UserGroup)</p>
      </el-collapse-item>
    </el-collapse>
  </div>

  <el-tabs type="border-card">
    <el-tab-pane label="用户账户"
      ><p>user</p>
      <div>
        <el-button text @click="centerDialogVisible = true">
          点击创建用户
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
                <el-checkbox v-model="checked1"
                  >用户首次登录必须修改密码</el-checkbox
                ><el-icon :plain="true" @click="reset_pwd_help"
                  ><Help
                /></el-icon>
              </el-col>
              <el-col :span="8">
                <el-checkbox v-model="checked1">账户是否封禁</el-checkbox
                ><el-icon :plain="true" @click="is_banned_help"
                  ><Help
                /></el-icon>
              </el-col>
              <el-col :span="8">
                <el-checkbox v-model="checked1">不允许密码登录</el-checkbox
                ><el-icon :plain="true" @click="help_nopassword_login"
                  ><Help
                /></el-icon>
              </el-col>
              <el-col :span="8"
                ><p>
                  用户组 id
                  <el-icon :plain="true" @click="help_usergroup"
                    ><Help
                  /></el-icon>
                </p>
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
        <el-divider />
        <p>列表的方式展示用户</p>
      </div></el-tab-pane
    >
    <el-tab-pane label="批量封禁">Config</el-tab-pane>
    <el-tab-pane label="批量禁止密码登录">Role</el-tab-pane>
    <el-tab-pane label="修改用户组权限">Role</el-tab-pane>
    <el-tab-pane label="修改用户权限">Task</el-tab-pane>
    <el-tab-pane label="权限组依赖关系视图">Task</el-tab-pane>
  </el-tabs>
</template>


<script setup>
import {
  is_banned_help,
  reset_pwd_help,
  help_usergroup,
  help_nopassword_login,
  centerDialogVisible,
} from "./user_group_dir.js";

centerDialogVisible;
console.log(centerDialogVisible);
</script>

<script>
export default {
  name: "UserGroup",
};
</script>



<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>