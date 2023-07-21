<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0"><el-icon><HomeFilled /></el-icon> Home</el-menu-item>
          
          <div class="flex-grow" />
          <el-menu-item index="1" @click="navigateTo_Whoami"
            >  {{whoami}}</el-menu-item
          >
          <div class="flex-grow" />
          <el-menu-item index="2" @click="navigateTo_Whoami"
            >         <div class="block">
          <el-avatar :size="50" :src="circleUrl" />
        </div></el-menu-item
          >
          <el-sub-menu index="3">
            <template #title><el-icon><SetUp /></el-icon> Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>

            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title><el-icon><Menu /></el-icon> view settings </template>
            <el-menu-item index="2-1">
              <el-radio-group v-model="isCollapse">
                <el-radio-button :label="false">expand</el-radio-button>
                <el-radio-button :label="true">collapse</el-radio-button>
              </el-radio-group></el-menu-item
            >
            <el-menu-item index="2-2">Placeholder 2</el-menu-item>
            <el-menu-item index="2-3">Placeholder 3</el-menu-item>
          </el-sub-menu>
        </el-menu></el-header
      >
      <el-container>
        <el-aside
          ><el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><Setting /></el-icon>

              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><Setting /></el-icon>

              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting />
              </el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </el-menu></el-aside
        >
        <el-main>
          <!-- this is body -->
          <p>this is a demo page</p>
          <img
            src="../assets/test/ZxjqtA-q9Q9dCkSYapPkXOtD5MYaQxF4PXS2EHVG7Hc.png"
            alt=""
            srcset=""
          />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import router from "@/router";

export default {
  name: "DashboardPage",
  data() {
    return {
      whoami: "whoami",
      circleUrl:
        "https://img1.imgtp.com/2023/06/10/dSC7l8wI.jpg",
    };
  },
  methods: {
    navigateTo() {
      console.log("navigate to");
    },
    navigateTo_Whoami() {
      router.push({ name: "whoami" });
    },
  },
  setup() {
    const isCollapse = ref(false);

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      isCollapse,
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