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
    <el-tab-pane label="用户账户">
      <p>user</p>
      <div>
        <el-button text @click="centerDialogVisible = true">
          点击创建用户
        </el-button>

        <el-dialog v-model="centerDialogVisible" title="创建用户" width="60%" align-center>
          <span>创建用户信息
            <el-row>
              <el-col :span="8">
                <p>用户名</p>
                <el-input v-model="created_username" placeholder="Please input" />
              </el-col>
              <el-col :span="8">
                <p>邮箱</p>
                <el-input v-model="created_email" placeholder="Please input" />
              </el-col>
              <el-col :span="8">
                <p>密码</p>
                <el-input v-model="created_password" placeholder="Please input" />
              </el-col>
              <el-col :span="8">
                <!-- <el-checkbox v-model="checked1"
                  >用户首次登录必须修改密码</el-checkbox
                ><el-icon :plain="true" @click="reset_pwd_help"
                  ><Help
                /></el-icon> -->
              </el-col>
              <el-col :span="8">
                <el-checkbox v-model="allow_login">账户是否封禁</el-checkbox><el-icon :plain="true" @click="is_banned_help">
                  <Help />
                </el-icon>
              </el-col>
              <el-col :span="8">
                <!-- <el-checkbox v-model="allow_token">不允许密码登录</el-checkbox
                ><el-icon :plain="true" @click="help_nopassword_login"
                  ><Help
                /></el-icon> -->
              </el-col>
              <el-col :span="8">
                <p>
                  用户组 id
                  <el-icon :plain="true" @click="help_usergroup">
                    <Help />
                  </el-icon>
                </p>
                <el-input v-model="input" placeholder="Please input" />
              </el-col>
              <el-col :span="8"> </el-col>
            </el-row>
          </span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="centerDialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="create_user">
                Confirm
              </el-button>
            </span>
          </template>
        </el-dialog>
        <el-divider />
        <h2>用户列表</h2>

        <p><el-scrollbar :height="250">
            <div>
              <el-table :data="users" style="width: 100%">
                <el-table-column prop="username" label="用户名"></el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="is_banned" label="是否封禁" :formatter="formatIsBanned"></el-table-column>
              </el-table>
            </div>
          </el-scrollbar></p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="批量封禁">
      <div>
        banned_users
        <el-input v-model="banned_users_uid" placeholder="banned_users_uid" />
        <el-input v-model="is_banneds" placeholder="banned_users_uid" />
        <el-button type="primary" @click="ban_user">封禁</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="修改权限组权限">
      <div>
        Role
        <div v-for="(component, name) in components" :key="name">
          <component :is="component"></component>
        </div>
      </div>
    </el-tab-pane>
    <!-- <el-tab-pane label="修改用户权限">Task</el-tab-pane> -->
    <!-- <el-tab-pane label="权限组依赖关系视图">Task</el-tab-pane> -->
  </el-tabs>
</template>


<script setup>
import axios from "axios";
import {
  is_banned_help,
  // reset_pwd_help,
  help_usergroup,
  // help_nopassword_login,
  centerDialogVisible,
} from "./user_group_dir.js";
import { ref, onMounted, defineComponent } from "vue";
import { ElNotification } from 'element-plus';
import md5 from 'md5';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');
const localStorageJSON = new LocalStorageJSON();

let created_username = ref('');
let created_email = ref('');
let created_password = ref('');
let allow_login = ref(false);
let banned_users_uid = ref('');
let is_banneds = ref('0');
centerDialogVisible;
let users = ref([]);

///////////////////////////////////
// 自动化加载组件 用于权限控制模块
const requireComponent = require.context(
  './permission_ctrl', // 组件所在的目录
  false, // 是否查询其子目录
  /\.vue$/ // 匹配基础组件文件名的正则表达式
)

let components = {};

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')

  components[componentName] = defineComponent(
    componentConfig.default || componentConfig
  )

  console.log(`Found component: ${componentName}`);
  console.log(`Loaded component: ${JSON.stringify(componentConfig.default || componentConfig)}`);
})


///////////////////////////////////
function create_user() {
  centerDialogVisible.value = false;
  const params = new URLSearchParams();
  params.append('username', created_username.value);
  params.append('password', created_password.value);
  created_email.value == md5(created_email.value);
  params.append('email', created_email.value);

  axios.post('/api' + '/api/auth/create_user', params, {
    headers: {
      uid: localStorageJSON.read('UID'),
      token: localStorageJSON.read('token'), // Add your token here
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      // Handle the response here
      ElNotification({
        title: 'Success',
        message: 'User created successfully',
        type: 'success'
      });
      if (allow_login.value) {
        axios.post('/api' + '/api/user/Modify_banned_users', params, {
          headers: {
            uid: localStorageJSON.read('UID'),
            token: localStorageJSON.read('token'), // Add your token here
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          "banned_users": response.data.uid,
          "is_banned": '1'
        })
          .then(() => {
            // Handle the response here
            ElNotification({
              title: 'Success',
              message: 'User banned successfully',
              type: 'success'
            });
          })
          .catch(error => {
            console.error(error);
          });
      }

    })
    .catch(error => {
      console.error(error);
    });
}

function list_user() {
  axios.get('/api' + '/api/user/list_users', {
    headers: {
      uid: localStorageJSON.read('UID'),
      token: localStorageJSON.read('token'), // Add your token here
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      users.value = response.data.result;
    })
    .catch(error => {
      console.error(error);
    });
}


function ban_user() {
  const params = new URLSearchParams();
  params.append('banned_users', banned_users_uid.value);
  params.append('is_banned', is_banneds.value);
  axios.post('/api' + '/api/user/Modify_banned_users', params, {
    headers: {
      uid: localStorageJSON.read('UID'),
      token: localStorageJSON.read('token'), // Add your token here
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(() => {
      // Handle the response here
      ElNotification({
        title: 'Success',
        message: 'User banned successfully',
        type: 'success'
      });
    })
    .catch(error => {
      console.error(error);
    });

}



onMounted(() => {
  list_user();

});


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