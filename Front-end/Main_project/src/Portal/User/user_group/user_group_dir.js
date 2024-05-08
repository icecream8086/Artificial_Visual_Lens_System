import { ElMessage } from "element-plus";
import { ref } from "vue";

const is_banned_help = () => {
  ElMessage({
    showClose: true,
    message: "设置初始状态是否为封禁,可以用于批量启用用户",
    // type: "success",
  });
};
const reset_pwd_help = () => {
  ElMessage({
    showClose: true,
    message: "设置初始状态是否为首次登录必须修改密码,可以用于批量重置密码",
    // type: "success",
  });
};
const help_usergroup = () => {
  ElMessage({
    showClose: true,
    message: "用户创建后默认为普通用户组, 可以在此处修改用户组,详见用户组管理",
    // type: "success",
  });
};
const help_nopassword_login = () => {
  ElMessage({
    showClose: true,
    message: "不允许密码登录后, 用户只能通过Token登录, 详见Token管理",
    // type: "success",
  });
};
const centerDialogVisible = ref(false);

//导出
export {
  is_banned_help,
  reset_pwd_help,
  help_usergroup,
  help_nopassword_login,
  centerDialogVisible,
};