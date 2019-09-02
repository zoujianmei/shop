<template>
    <div>
      <van-nav-bar
          title="注册"
          left-text="返回"
          left-arrow
          @click-left="onBack"
        />
      <div>
        <img class="title_img" src="../../assets/images/title.jpg">
          <div style="padding-top: 70px;">
            <van-cell-group>
                <van-field
                    placeholder="请输入手机号"
                />
                 <van-field
                    center
                    clearable
                    placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
                <van-field
                    type="password"
                    placeholder="请输入密码"
                />
            </van-cell-group>
            <div style="margin: 10px;">
                <van-button size="large" type="primary" style="height: 45px;line-height:45px;">注册</van-button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
   methods: {
      onBack() {
      history.back();
      },
    }
}
</script>

<style>

</style>
