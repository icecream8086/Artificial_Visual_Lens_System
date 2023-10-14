<template>
  <el-row>
    <el-col :span="24">
      <el-card class="box-cards">
        <Image_preview :iamge_list="this.iamge_list" :preview_image="this.preview_image">
        </Image_preview>
        <p>
          <el-row>
            <el-col :span="12">
              <el-icon size="24"><Setting /></el-icon>
            </el-col>
            <el-col :span="12">
              <el-icon size="24"><ArrowRightBold /></el-icon>
            </el-col>
          </el-row>
          
        </p>
        <p>{{ names }}</p>

      </el-card>
    </el-col>

  </el-row>
</template>
<script>
import Image_preview from './image_preview.vue';
export default {
  name: "image_box",
  data() {
    return {
      names: "data set name",
    };
  },
  components: {
    Image_preview
  },
  props: {
    iamge_list: {
      type: Array,
      required: true
    },
    preview_image: {
      type: String,
      required: true
    }
  },
};

</script>
<style scoped>.box-cards {
  width: 180px;
  height: 210px;
}</style>
  