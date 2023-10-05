<template>
    <el-row>
        <el-col :span="12">
            <el-card>
                <el-button color="#626aef" :dark="isDark" :icon="Edit">Default</el-button>
                <el-button color="#626aef" :dark="isDark" :icon="Share" plain>Plain</el-button>
                <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
                <el-button color="#626aef" :dark="isDark" disabled plain>Disabled Plain</el-button>
            </el-card>
        </el-col>
    </el-row>
</template>
  
<script setup> import {

  Edit,
  Share,
} from '@element-plus/icons-vue'
</script>
<script>

export default {
    name: 'Host_Setting'
}
</script>
  

  