<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <!-- Header -->
                <el-page-header @back="goBack">
                    <template #content>
                        <span class="text-large font-600 mr-8">{{ folderName }}</span>
                    </template>
                </el-page-header>
            </el-header>
            <el-main>
                <!-- Main -->
                <div>
                    <!-- 相册内容 -->
                    <el-scrollbar  :height="500" >
                        <el-row>
                            <el-col :span="4" v-for="src in srcList" :key="src">
                                <div class="item_image_box">
                                    <image_preview_large :image_list="src"></image_preview_large>
                                </div>
                            </el-col>
                        </el-row>
                    </el-scrollbar>
                </div>
            </el-main>
            <!-- <el-footer style="    border: 1px solid #00ffd5;"> -->
            <el-footer >
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="6"><el-button>文件属性</el-button></el-col>
                    <el-col :span="6"><el-button>权限属性</el-button></el-col>
                    <el-col :span="6"><el-button>同步数据集</el-button></el-col>
                    <el-col :span="6"><el-button>删除文件夹</el-button></el-col>
                </el-row>
                <el-divider></el-divider>
            </el-footer>
        </el-container>
    </div>
</template>
  
<script>
import axios from 'axios';
import image_preview_large from './sub_components/image_preview_large.vue';
export default {
    name: 'watchFolder',
    created() {
        let message = this.$route.params.message;
        console.log(message);
        this.path = message;
    },
    data() {
        return {
            names: "data set name",
            path: "path",
            srcList: [
                '1',
            ],
            limits: 255,
            folderName: "folderName",
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
    mounted() {
        axios.get('/api' + '/api/file/watchfolders', { headers: { uid: "3", token: "1", path: this.path } })
            .then(res => {
                this.srcList = res.data.result;
                this.srcList = res.data.result.map(item => [item]);
            })

    },
    props: {
    },
    components: {
        image_preview_large,
    },
}
</script>

<style scoped>
.demo-image__lazy {
    height: 400px;
    overflow-y: auto;
}

.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}
</style>