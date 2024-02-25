<template>
    <div class="image-preview">
        <div v-for="(image, index) in images" :key="index">
            <el-image :src="image" :zoom-rate="1.2" :preview-src-list="images" :initial-index="index" fit="contain" />
        </div>
    </div>
</template>

<script setup>
</script>

<script>
import axios from 'axios';
export default {
    name: 'ImagePreview',
    methods: {
    },
    data() {
        return {
            images: [],
        };
    },
    async created() {
        function cleanUrl(url) {
            const serverUrl = 'http://192.168.1.100:3000'; // 你的服务器地址
            return url.replace(serverUrl, '');
        }
        const imageList = this.image_list;
        console.log(imageList);
        this.images = [];
        for (let url of imageList) {
            url = cleanUrl(url); // 清洗URL
            let response;
            try {
                response = await axios.get('/api' + url, { responseType: 'blob', headers: { uid: "3", token: "1" } });
            } catch (err) {
                console.log(err.message);
                continue; // 如果请求失败，跳过当前的迭代
            }
            console.log(response);
            try {
                if (response && response.data.type.includes('image')    ) {
                    const blob = new Blob([response.data], { type: response.headers['content-type'] });
                    const blobUrl = URL.createObjectURL(blob);
                    this.images.push(blobUrl);
                }
            } catch (err) {
                console.log(err.message);
            }

        }
    },
    props: {
        image_list: {
            type: Array,
            required: true
        },
    },
}
</script>

<style scoped>
.image-preview {
    width: 240px;
    height: 196px;
    border: 1px solid #00ffd5;
    overflow: hidden;
}
</style>