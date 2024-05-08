<template>
  <el-card>
    <el-row>
        <el-col :span="24">{{ names }}</el-col>
        <el-col :span="12" v-if="show_num">数量 {{ file_count }}</el-col>
        <el-col :span="12">{{ size }} mb</el-col>
    </el-row>
  </el-card>
</template>
<script>

export default {
    name: "folderKard",
    data() {
        return {
            file_count: 0,
            names: '',
            size: 0,
            show_num: true
        };
    },
    props: {
        _names: {
            type: String,
            default: 'default'
        },
        _file_count: {
            type: Number,
            default: 0
        },
        _size: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        this.names = this._names;
        this.file_count = this._file_count;
        this.size = this._size;
        this.size= this.size.toFixed(2);
        // _________________________________________
        if (this.file_count === 0) {
            this.show_num = false;
        }
    }
}
</script>