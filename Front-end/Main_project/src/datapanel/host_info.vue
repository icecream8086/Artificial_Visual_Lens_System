<template>
    <el-row>
        <el-col :span="12">
            <diskInfo_panel class="box-card—ok" style="width: auto;" :movable="Movable"></diskInfo_panel>
        </el-col>
        <el-col :span="12">
            <hostinfo_panel class="box-card—ok" style="width: auto;" :movable="Movable"></hostinfo_panel>
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
            Movable: true,
        }
    },
    methods: {
    },
    props: {
        movable: {
            type: Boolean,
            default: true,
        },
    },
    watch: {
        movable: function (val) {
            this.Movable = val;
        }
    },

    components: {
        hostinfo_panel,
        diskInfo_panel,
    },
    mounted() {
        this.Movable = this.movable;
    },
}
</script>

<style>
.box-card—ok {
    border: 1px solid #00e5ff;
}

.box-card—error {
    border: 1px solid #ff0000;
}

.box-card—warning {
    border: 1px solid #fbff00;
}
</style>
  