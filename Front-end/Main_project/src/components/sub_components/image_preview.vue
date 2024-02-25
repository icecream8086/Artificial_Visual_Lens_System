<template>
    <div class="image-preview">
        <el-image  :src="preview_image" :zoom-rate="1.2" :preview-src-list="image_list"
            :initial-index="4" fit="contain" />
    </div>
</template>

<script setup>
</script>

<script>
export default {
    name: 'ImagePreview',
    data() {
        return {
            image_lists: [],
        }
    },
    props: {
        image_list: {
            type: Array,
            required: true
        },
        preview_image: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.image_lists = this.image_list;
    }
}
</script>

<style scoped>
.image-preview {
    width: 120px;
    height: 98px;
    border: 1px solid #00ffd5;
    overflow: hidden;
}
</style>