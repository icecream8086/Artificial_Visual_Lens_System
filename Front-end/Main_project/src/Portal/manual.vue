<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="User" name="first"><manual_page :title="FileControl" :doc_url="'/api/file/downloadFile/FileControl.md'"></manual_page></el-tab-pane>
        <el-tab-pane label="Config" ><manual_page :title="'DAG'" :doc_url="'/api/file/downloadFile/test_DAG.md'"></manual_page> </el-tab-pane>
        <el-tab-pane label="Role" >Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
</template>

<script setup>
import { ref } from 'vue'
const activeName = ref('first')

</script>

<script>
import manual_page from '@/components/manual_page.vue'

export default {
    name: 'manual_portal',
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {

    },components: {
        manual_page
    }
}

</script>
