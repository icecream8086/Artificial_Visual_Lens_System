<template>
  <el-card>
    <div class="grid-content ep-bg-purple">
      <div class="text">{{ titles }}</div>
    </div>
    <div v-show="!healthy_check">
      <el-icon color="red" size="50">
        <WarningFilled />
      </el-icon>
    </div>
    <div v-show="healthy_check">
      <el-icon color="green" size="50">
        <SuccessFilled />
      </el-icon>
    </div>
  </el-card>
</template>
  
  
  
<script>
export default {
  name: "health_card",
  data() {
    return {
      titles: this.title,
      healthy_check: this.healthy,
    };
  },
  props: {
    /**
     * @description A Vue component representing a health card.
     * @prop {String} title - The title of the health card.
     * @prop {Boolean} healthy - Indicates whether the person is healthy or not.
     */
    title: String,
    healthy: Boolean,
  },
};
</script>
  