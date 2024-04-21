<template>
    <el-row>
        <el-col :span="24">
            <div>
                <!-- 启动按钮区域 -->
                <el-row>
                    <el-col :span="12"><div>
                        数据集选择区域
                    </div></el-col>
                    <el-col :span="6">
                        测试按钮区域
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="8"> <el-scrollbar height="200px">
                <div>
                    数据集划分方案
                </div>
            </el-scrollbar></el-col>
        <el-col :span="8"> <el-scrollbar height="200px">
                <div>
                    数据集处理方案
                </div>
            </el-scrollbar></el-col>
        <el-col :span="8"> <el-scrollbar height="200px">
                <div>
                    模型列表，下载上传
                </div>
            </el-scrollbar></el-col>
    </el-row>
</template>