<template>
  <div class="edit_info_main">
    <el-row gutter="25">
      <el-col :span="4">
        <div>
          <el-avatar :icon="UserFilled" style="height: 200px; width: 200px" />
        </div>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <p>新用户名</p>
            <el-input v-model="input" placeholder="Please input" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "EditUserInfo",
  };
</script>

<style>
  .edit_info_main {
    /* 向下偏移5% */
    margin-top: 5%;
  }
</style>