<template>
  <el-card class="box-cards">

    <el-row>
      <el-col :span="2"></el-col>

      <el-col :span="20">
        <Image_preview :preview_image="this.preview_image">
        </Image_preview>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>

    <el-row>
      <el-col :span="4"></el-col>

      <el-col :span="8">
        <el-icon :size="36">
          <Setting />
        </el-icon>
      </el-col>
      <el-col :span="4"></el-col>

      <el-col :span="8">
        <el-icon :size="36" @click="navigator_to_image_conf">
          <ArrowRightBold />
        </el-icon>
      </el-col>


    </el-row>
    <el-row> <el-col :span="3"></el-col>
      <el-col :span="18">
        <div style="overflow: hidden;">{{ names }}</div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </el-card>
</template>
<script>
import router from "@/router";

import Image_preview from './image_preview.vue';
export default {
  name: "image_box",
  data() {
    return {
      names: "data set name",
      path: "path",
    };
  },
  methods: {
    navigator_to_image_conf() {
      router.push({
        name: 'watchfolder',
        params: { message: this.path ,name:this.names}
      });
    }
  },
  components: {
    Image_preview
  },
  mounted() {
    this.names = this.dataset_name;
    this.path = this.paths;
  },
  props: {
    // iamge_list: {
    //   type: Array,
    //   required: true
    // },
    preview_image: {
      type: String,
      required: true
    },
    dataset_name: {
      type: String,
      required: true
    },
    paths: {
      type: String,
      required: true
    }
  },
};

</script>
<style scoped>
.box-cards {
  height: 240px;
  width: 192px;
}
</style>
  