<template>
  <div class="common-layout">
    <el-container>
      <el-header
        ><el-page-header @back="goBack">
          <template #content>
            <span class="text-large font-600 mr-3">my info</span>
          </template> </el-page-header
      ></el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "AboutMyself",
  methods: {
    goBack() {
      console.log("go back");
      //go back to dashboard
      router.push({ name: "dashboard" });
    },
  },
};
</script>