<template>
  <el-scrollbar :height="650">
    <el-row>
      <el-col :span=spans v-for="w in srcList" :key="w">
        <div class="item_image_box">
          <image_box :dataset_name="w.FolderName" :preview_image="w.preview_path" :paths="w.Path"></image_box>
        </div>
      </el-col>
      <!-- <el-col :span="3">
      <div class="item_image_box">
        <image_box :dataset_name="a" :preview_image="w"></image_box>
      </div>
    </el-col> -->
  </el-row>
  </el-scrollbar>
</template>
<script>
import axios from 'axios';
import image_box from './sub_components/image_box.vue';
const { LocalStorageJSON } = require('@/option/browser_IO/LocalStorage');

export default {
  name: "image_conf",
  data() {
    return {
      size: 4,
      spans: 3,
      srcList: [
      ]
    };
  },
  components: {
    image_box,
  },
  props: {

  },
  watch: {
    spans(val) {
      this.spans = val;
    }
  },
  mounted() {
    const localStorageJSON = new LocalStorageJSON();
      let tokens = localStorageJSON.read('token');
      let UID = localStorageJSON.read('UID');
    axios.get('/api' + '/api/file/listfolder', {
      headers: {
        'UID': UID,
        'token': tokens,

      }
    }).then((res) => {
      for (let i = 0; i < res.data.result.length; i++) {
        this.srcList.push(res.data.result[i]);
        
      }

    }).catch((err) => {
      console.log(err);
    });



  },
};

</script>
<style scoped>
.text {
  font-size: 16px;
}

.item_image_box {
  padding: 3px 0;
  overflow-wrap: break-word;
}

</style>
  