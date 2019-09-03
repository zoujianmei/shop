<template>
    <div style="height:50px;">
        <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
          <van-tabbar-item icon="wap-nav" to="/category">分类</van-tabbar-item>
          <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
          <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
    import { Tabbar, TabbarItem } from "vant";
    export default {
        name:'navigate',
        components:{
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },
        data() {
            return {
              active: 0
          }
      },
      watch:{   //监听路由变化
        $route(to,from){
            console.log(to.path);
        }
    },
    //   watch: {
    //     $route(to, from) {
    //         console.log(123)
    //       switch (to.fullPath) {
    //         case '/home':
    //         this.active = 0;
    //         break;
    //         case '/category':
    //         this.active = 1;
    //         break;
    //         case '/cart':
    //         this.active = 2;
    //         break;
    //         case '/user':
    //         this.active = 3;
    //         break;
    //       }
    //     }
    // },
    methods: {
      //   tab(index) {
      //     this.active = index;
      //     console.log(this)
      //     console.log(this.active)
      // }
  }
}
</script>