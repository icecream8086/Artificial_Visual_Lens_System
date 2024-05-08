<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect">
          <el-menu-item index="0"><el-icon>
              <HomeFilled />
            </el-icon>
            Home</el-menu-item>

          <div class="flex-grow" />
          <el-menu-item index="1" @click="navigateTo_Whoami">
            {{ whoami }}</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="2" @click="navigateTo_Whoami">
            <div class="block">
              <el-avatar :size="50" :src="circleUrl" />
            </div>
          </el-menu-item>
          <el-menu-item @click="navigateTo_train"><el-icon>
              <MessageBox />
            </el-icon>
            训练
          </el-menu-item>

          <el-sub-menu index="3">
            <template #title><el-icon>
                <Menu />
              </el-icon>
              控制台视图设置
            </template>
            <el-menu-item index="2-1">
              <el-radio-group v-model="isCollapse">
                <el-radio-button :label="false" plain>展开侧栏</el-radio-button>
                <el-radio-button :label="true" plain>隐藏侧栏</el-radio-button>
              </el-radio-group></el-menu-item>
            <el-menu-item index="2-2">
              <el-radio-group v-model="Color_Mode">
                <el-radio-button :label="false" plain>浅色模式</el-radio-button>
                <el-radio-button :label="true" plain>深色模式</el-radio-button>
              </el-radio-group></el-menu-item>
            <el-menu-item index="2-3" v-model="view_mode">
              <el-radio-button :label="false" plain>展示模式</el-radio-button>
              <el-radio-button :label="true" plain>用户模式</el-radio-button>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-header>

      <el-container>
        <el-aside style="width: unset">
          <!-- style="width: unset;"
          用于自适应容器大小 -->
          <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1" @click="select_host_info" v-if="loadmode_default.at(0)">
              <el-icon>
                <Postcard />
              </el-icon>
              <template #title>Host Info</template>
            </el-menu-item>

            <el-menu-item index="2" @click="select_performance_analysis" v-if="loadmode_default.at(1)">
              <el-icon>
                <PieChart />
              </el-icon>
              <template #title>Performance analysis</template>
            </el-menu-item>

            <el-menu-item index="3" @click="select_image_grid" v-if="loadmode_default.at(2)">
              <el-icon>
                <Picture />
              </el-icon>
              <template #title>Image </template>
            </el-menu-item>

            <el-menu-item index="4" @click="select_user_group" v-if="loadmode_default.at(3)">
              <el-icon>
                <User />
              </el-icon>
              <template #title>Users </template>
            </el-menu-item>

            <el-menu-item index="5" @click="select_host_setting" v-if="loadmode_default.at(4)">
              <el-icon>
                <Setting />
              </el-icon>
              <template #title>Host Setting </template>
            </el-menu-item>

            <el-menu-item index="6" @click="select_analyze_status" v-if="loadmode_default.at(5)">
              <el-icon>
                <FullScreen />
              </el-icon>
              <template #title>Analyze Status</template>
            </el-menu-item>

            <el-menu-item index="7" @click="select_step_recorder" v-if="loadmode_default.at(6)">
              <el-icon>
                <VideoCamera />
              </el-icon>
              <template #title>Step recorder</template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <div v-if="booleanArray.at(4)">
            <user_group> </user_group>
          </div>
          <div v-if="booleanArray.at(3)">
            <image_conf></image_conf>
          </div>
          <div v-if="booleanArray.at(2)">
            <Performance_analysis></Performance_analysis>
          </div>
          <div v-if="booleanArray.at(6)">
            <Analyze_Status></Analyze_Status>
          </div>
          <div v-if="booleanArray.at(7)">
            <Step_recorder></Step_recorder>
          </div>
          <div v-if="booleanArray.at(5)">
            <Host_Setting></Host_Setting>
          </div>
          <div v-if="booleanArray.at(1)">
            <host_info></host_info>
            <!-- this is body -->
            <!-- <p>this is a demo page</p>
            <p>主机信息页面-占位符</p>
            <p>将来配置局部刷新内容</p>
            <p>部分管理员专用组件可以隐藏</p>
            <img src="../assets/test/ZxjqtA-q9Q9dCkSYapPkXOtD5MYaQxF4PXS2EHVG7Hc.png" alt="" srcset="" /> -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {  ref } from "vue";
import router from "@/router";
import { useDark } from "@vueuse/core";
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');

import user_group from "@/Portal/User/user_group/user_group.vue";
import Performance_analysis from "@/datapanel/Performance_analysis.vue";
import host_info from "@/datapanel/host_info.vue";
import Analyze_Status from "@/datapanel/Analyze_Status.vue";
import Step_recorder from "@/datapanel/Step_recorder.vue";
import Host_Setting from "@/datapanel/Host_Setting.vue";
import image_conf from "@/components/image_conf.vue";
import { apiTarget } from "../../config";
import axios from 'axios';
export default {
  name: "DashboardPage",
  data() {
    return {
      booleanArray: [true, false, false, false, false, false, false],
      loadmode_default: [true, true, true, true, true, true, true],
      loadmode_normal_user: [true, true, true, false, false, true, true],
      loadmode_control_mode: [false, false, true, true, true, true, false],
      loadmode_normal_user_control_mode: [false, false, true, false, false, true, false],

      whoami: "whoami ??",
      circleUrl: "https://avatars.githubusercontent.com/u/3423452",
    };
  },
  watch: {
    Color_Mode() {
      this.switchThemes();
    },
    view_mode() {
      // v-show
      console.log("use v-show to hide or show");
    },
  },
  components: {
    user_group,
    Performance_analysis,
    host_info,
    Analyze_Status,
    Step_recorder,
    Host_Setting,
    image_conf,
  },
  methods: {

    initBooleanArray(booleanArray) {
      for (let i = 0; i < booleanArray.length; i++) {
        booleanArray[i] = false;
      }
    },
    switchThemes() {
      // Switch themes
      useDark().value = !useDark().value;
    },
    checkDarkMode() {
      // Check if dark mode is enabled
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    navigateTo() {
      console.log("navigate to");
    },
    select_user_group() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[4] = true;
    },
    select_image_grid() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[3] = true;
    },
    navigateTo_Whoami() {
      router.push({ name: "whoami" });
    },
    select_host_info() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[1] = true;
    },
    select_performance_analysis() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[2] = true;

    },
    select_host_setting() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[5] = true;
    },
    select_analyze_status() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[6] = true;
    },
    select_step_recorder() {
      this.initBooleanArray(this.booleanArray);
      this.booleanArray[7] = true;
    },
    loadUserBasicInfo() {
      /*
      {
    "results": [
        {
            "username": "Avatar",
            "full_name": "Avatar",
            "email": "Avatar@mail.com"
        }
    ]
}

/api/user/get_basic_info/{id}
      */
      const localStorageJSON = new LocalStorageJSON();
      axios.get('/api' + '/api/user/get_basic_info/' + localStorageJSON.read('UID'), {
        headers: {
          'UID': localStorageJSON.read('UID'),
          'token': localStorageJSON.read('token'),
        }
      }).then(res => {
        this.whoami = res.data.results[0].full_name;
        localStorage.setItem('basic_info', JSON.stringify(res.data.results[0]));
      })
        .catch(err => {
          console.log(err);
          console.log('request /api/user/get_basic_info/ failed');

        })

    },
    navigateTo_train() {
      ///local_api/train
      router.push({ name: "train" });
    },
    loadAvatar() {
      let url = apiTarget + "api/user/get_Avatar/" + localStorage.getItem('UID');
      console.log(url);
      localStorage.setItem('avatarUrl', url);
      this.circleUrl = url;
      this.loadUserBasicInfo();
    }
  },
  mounted() {
    this.initBooleanArray(this.booleanArray);
    this.booleanArray[1] = true;
    // this.loadmode_default = this.loadmode_control_mode;

    // this.loadmode_default = this.loadmode_normal_user;
    // this.loadmode_default = this.loadmode_normal_user_control_mode;
    this.loadAvatar();
  },
  setup() {
    const isCollapse = ref(true);
    const Color_Mode = ref(true);
    const view_mode = ref(false);
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      isCollapse,
      Color_Mode,
      view_mode,
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.flex-grow {
  flex-grow: 1;
}
</style>