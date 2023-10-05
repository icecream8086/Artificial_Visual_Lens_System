<template>
    <el-row>
        <el-col :span="12">
           <diskInfo_panel class="box-card—blue" style="width: auto;"></diskInfo_panel>
        </el-col>
        <el-col :span="12">
            <hostinfo_panel class="box-card—blue" style="width: auto;"></hostinfo_panel>
        </el-col>
    </el-row>
</template>
  
  
  
<script>
import hostinfo_panel from '@/components/hostinfo_panel.vue';
import diskInfo_panel from '@/components/diskInfo_panel.vue';

export default {
    name: 'host_info', // 修改为多个单词的组件名
    data() {
        return {
        }
    },
    methods: {
  },
  props: {
    },
    components: {
        hostinfo_panel,
        diskInfo_panel,
    },
    mounted() {

  },
}
</script>

<style>
.box-card—blue {
    border: 1px solid #00e5ff;
}
</style>
  