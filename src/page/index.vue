<template>
  <div>
  	<div :style="'height:'+topheight+'px'" ></div>
    <!-- <Header></Header> -->
  	<router-link to="/login">去登陆</router-link>
    <div class="article_list">
      <!-- <ul>
        <li v-for="i in list" :key="i.id">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul> -->
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
	// import Header from '../components/header.vue'
	import Footer from '../components/footer.vue'
	export default {
	  components: { Footer },
	  data () {
	    return {
	      // list: []
	      topheight:0,
	    }
	  },
	  created () {
	    // this.getData()
	  },
	  methods: {
	    // getData () {
	    //   this.$api.get('topics', null, r => {
	    //     this.list = r.data
	    //   })
	    // }
	  }
	}
</script>
<style lang="css">
  @import "../assets/style/index.css";
</style>