<template >

<view class="login_bg_containe">

  <uni-section :title="nickname" :subTitle="group" type="line" padding class="sections">
  <div>
    <u-avatar :src="src" mode="square" @click="goAbout"></u-avatar>
  </div>
</uni-section>

<u-collapse style=" font-size: 18px; background-color: #171717; opacity: 75%;" >
  <u-collapse-item title="用户设置" name="login info" >
    <text >将来用于处理用户登录相关接口，部分组件将来会通过条件渲染隐藏</text>
    <div>
      <!-- 个人门户 -->
      <u-button text="个人信息设置" @click="goAbout"></u-button>
      <!-- 用户组 -->
      <u-button text="个人权限设置" @click="permissions"></u-button>
      <!-- 如果登录用户是狗管理的话，显示组成员的CRUD功能 -->
      <u-button text="用户组成员管理"></u-button>
      <u-button text="用户组管理"></u-button>
    </div>
  </u-collapse-item>

  <u-collapse-item title="权限设置" name="permission settings">
    <text >包含Android操作系统相关的权限设置</text>
    <div>
      <u-button text="检查读写权限"></u-button>
      <u-button text="检查摄像头权限"></u-button>
      <u-button text="检查定位权限"></u-button>
      <u-button text="关于此设备" @click="aboutdevice"></u-button>
    </div>
  </u-collapse-item>

  <u-collapse-item title="服务器设置" name="server">
    <text >包括杂七杂八的调试功能</text>
    <u-button text="服务器地址"></u-button>
    <u-button text="服务器负载状态"></u-button>
    <u-button text="服务器健康状况测试"></u-button>
  </u-collapse-item>

  <u-collapse-item title="关于" name="other">
    <text >包含软件许可和一些乱七八糟的东西</text>
  </u-collapse-item>
</u-collapse>

  <view class="content">
      <view class="text">
        <view style="padding: 20px">
          <u-button type="primary" text="登录" @click="login_portal"></u-button>
          <view style="margin-top: 10px;"></view> <!-- 添加这行代码来增加间距 -->
          <u-button type="primary" :disabled="disabled_logout" text="注销账户"></u-button>
        </view>
      </view>
    </view>
</view>


</template>

<script>
  export default {
    globalData: {
      userInfo: null
    },
    data() {
      return {
        nickname: "defalt_nickname",
        group: 'default_group',
        src: 'https://img1.imgtp.com/2023/06/10/dSC7l8wI.jpg',
        text: '无头像',
        disabled_logout: true,
        itemStyle: {
          padding: '20px 0',
          'border-bottom': '1px solid #e5e5e5'
        }
      };
    },
    methods: {
      // goAbout() navigates to the about page.
      goAbout() {
        // Navigate to the about page.
        uni.navigateTo({
          url: "/pages/user/about",
        });
      },
      permissions() {
        // Navigate to the permissions page
        uni.navigateTo({
          url: "/pages/user/permissions",
        });
      },
      aboutdevice() {
        uni.navigateTo({
          url: "/pages/device/about",
        });
      },
      whoami() {
        uni.navigateTo({
          url: "/pages/woami/whoami",
        });
      },
      login_portal() {
        uni.navigateTo({
          url: "/pages/woami/login_portal",
        });
      },
      open(e) {
        // console.log('open', e)
      },
      close(e) {
        // console.log('close', e)
      },
      change(e) {
        // console.log('change', e)
      },
      handleClick() {
        // 点击按钮后执行的操作
      },
    },
    onLoad() {
      console.log('onLoad')
      uni.getStorage({
        key: 'avatarUrl',
        success: (res) => {
          console.log(res.data);
          this.src = res.data; // 使用 this.src 来更新组件的数据
        }
      });
      uni.getStorage({
        key: 'nickname',
        success: (res) => {
          console.log(res.data);
          this.nickname = res.data; // 使用 this.nickname 来更新组件的数据
        }
      });
      uni.getStorage({
        key: 'role',
        success: (res) => {
          console.log(res.data);
          this.group = res.data; // 使用 this.group 来更新组件的数据
        }
      });
    },
  };
</script>

<style scoped>
	.collapse-item {
		color: red;
		padding-bottom: 10px;
	}
</style>


<style>
.login_bg_containe {
  background-image: url("../../static/bokeh-hex.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: blue;
}
.sections{
  /**用户名片背景 */
  background-color: #171717;
  position: sticky;
}

.collapses{
  background-color: #171717;
  border: 1px solid #1999ef;
  color:#1999ef

}
.collapses_content{
  background-color: #171717;
  border: 1px solid #1999ef;
  color:#1999ef
}
</style>