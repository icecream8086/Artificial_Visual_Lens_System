<template>
  <div class="common-layout">
    <el-container>
      <el-header><el-page-header @back="goBack">
          <template #content>
            <span class="text-large font-600 mr-3">my info</span>
          </template>
        </el-page-header></el-header>
      <el-main>
        <div class="common-layout">
          <el-container>
            <el-header height="80px">
              <!-- <el-image style="position: relative; width: 100%; height: 100%" :src="url" :fit="bg_layout" /> -->
              <!-- <span
                >I sit at my window this morning where the world like a
                passer-by stops for a moment, nods to me and goes.</span
              > -->
            </el-header>
            <el-divider />

            <el-main>
              <div class="common-layout">
                <el-container>
                  <el-aside width="360px">
                    <el-row>
                      <el-col :span="2">
                        <div class="grid-content ep-bg-purple-light" />
                        <div class="flex">
                          <el-button type="primary" :icon="Position" @click="navigate_to_modify_info">编辑个人信息 username</el-button>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="2" @click="sendEmail">
                        <!-- 发送邮件给 (将来改为悬浮窗口) -->
                        <el-icon size="25px">
                          <Promotion />
                        </el-icon>
                      </el-col>
                      <el-col :span="2">
                        <!-- 访问 (将来改为悬浮窗口) -->
                        <el-icon size="25px">
                          <Link />
                        </el-icon>
                      </el-col>
                      <el-col :span="2">
                        <!-- 呼叫 (将来改为悬浮窗口) -->
                        <el-icon size="25px">
                          <Iphone />
                        </el-icon>
                      </el-col>
                    </el-row>
                  </el-aside>
                  <el-main>
                    <div class="">
                      <el-avatar :size="120" :src=url @error="errorHandler">
                      </el-avatar>
                    </div>
                    <div>
                      <info_dashboard></info_dashboard>
                    </div>
                    <template>
                      <el-skeleton :rows="5" animated />
                    </template>

                  </el-main>
                </el-container>
              </div>
            </el-main>
          </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.whoami_el-row {
  // 每个行之间就会有一个 20px 的底部间距
  margin-bottom: 20px;
}

.whoami_el-row:last-child {
  margin-bottom: 0;
}

.whoami_el-col {
  // .el-col 类被设置了 border-radius: 4px 这样每个列的边框都会有 4px 的圆角。
  border-radius: 2px;
}

.whoami_grid-content {
  // .grid-content 类被设置了 border-radius: 4px; 和 min-height: 36px;，这样每个格子的内容区域会有 4px 的圆角，并且最小高度为 36px。
  border-radius: 4px;
  min-height: 18px;
}
</style>

<script setup>
// don't move !!!
import { Position, Link } from "@element-plus/icons-vue";

</script>

<script>
import router from "@/router";
import info_dashboard from "@/datapanel/info_dashboard.vue";
export default {
  name: "AboutMyself",
  data() {
    return {
      url: "http://192.168.1.100:8080/s/yto52XqMeZn8HyT/download/v2-2f96d251ac71a6da5c142beffd52e256.jpg",
      bg_layout: "scale-down",
      username: "username",
    };
  },
  mounted() {
    this.loadAvatar();
  },
  components: {
    info_dashboard,
  },
  methods: {
    goBack() {
      //go back to dashboard
      router.push({ name: "dashboard" });
    },
    navigate_to_modify_info() {
      //navigate to the page
      router.push({ name: "modify_info" });
    },
    loadAvatar() {
      this.url=localStorage.getItem("avatarUrl");
      let data= localStorage.getItem("basic_info");
      let basic_info=JSON.parse(data);
      this.username=basic_info.username;
      
    },
    sendEmail() {
            this.$message({
                showClose: true,
                center: true,
                message: '正在打开邮箱 ...',
                type: 'success'
            });
            let emails = 'mailto:' + this.email;
            window.open(emails);
        }
  },
};

</script>