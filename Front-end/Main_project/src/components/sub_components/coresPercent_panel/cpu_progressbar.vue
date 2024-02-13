<template>
    <el-row style="width: auto;">
        <el-col :span="6">CPU {{ Core_id }} </el-col>
        
        <el-col :span="18"><el-progress :percentage="Percentages" /></el-col>
    </el-row>
</template>
<script>

export default {
    name: 'cpu_progressbar',
    data() {
        return {
            Core_id: 0,
            Percentages: 0,
        }
    },
    mounted() {
        this.Core_id = this.core_id;
        this.Percentages = this.percentages;
    }
    ,
    methods: {
    },
    props: {
        percentages: {
            type: Number,
            default: 0,
        },
        core_id: {
            type: Number,
            default: 99,
        },
    },
    watch: {
        percentages: function (val) {
            this.Percentages = val;
        },
        core_id: function (val) {
            this.Core_id = val;
        }
    },
}

</script>