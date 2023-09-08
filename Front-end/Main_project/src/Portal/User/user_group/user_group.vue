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
    <el-tab-pane label="用户账户">User</el-tab-pane>
    <el-tab-pane label="批量封禁">Config</el-tab-pane>
    <el-tab-pane label="批量删除用户">Role</el-tab-pane>
    <el-tab-pane label="批量禁止密码登录">Role</el-tab-pane>
    <el-tab-pane label="批量修改用户组">Task</el-tab-pane>
    <el-tab-pane label="高级搜索">Task</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "UserGroup",
};
</script>