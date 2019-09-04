<template>
	<div>
		<router-link to="/login">
			<div class="login_box"></div>
			<div class="login">马上登录</div>
        </router-link>
        <div style="clear:both;"></div>
		<div :style="'height:'+topheight+'px'" ></div>
		<van-search
		v-model="value"
		placeholder="请输入搜索关键词"
		show-action
		shape="round"
		@search="onSearch"
		>
		<div slot="action" @click="onSearch">搜索</div>
	</van-search>
	<van-swipe :autoplay="3000">
		<van-swipe-item v-for="(image, index) in images" :key="index">
			<img v-lazy="image" />
		</van-swipe-item>
	</van-swipe>
	<img alt="" style="width: 100%;" src="https://haitao.nos.netease.com/gr4TfN5hhFhFg1CaUgya1mdkPDLpE4WTT1806271501_1125_144.png" lazy="loaded">

	<ul class="cate_box">
		<li v-for="(image,index) in imagelist" :key="index" class="cate">
			<div class="image-wrapper">
				<a :href="image.url">
					<img alt="" class="cap-image-ad__image" v-lazy="image.src+''" />
				</a>
			</div>
		</li>
	</ul>
	<div class="recommend">为你推荐</div>
	<ul class="good_list">
		<li class="good_item" v-for="(item, index) in goods" :key="index">
			<a href="">
				<div class="good_photo">
					<img alt="" class="cap-image-ad__image" v-lazy="item.url+''" />
				</div>
				<div class="good_info">
					<h3 class="title">{{item.title}}</h3>
					<p class="sale-info">
						<span class="sale-price">{{item.price}}</span>
					</p>
				</div>
			</a>
		</li>
	</ul>
	<div style="clear:both;"></div>
	<Footer></Footer>
</div>
</template>
<script>
	// import Header from '../components/header.vue'
	import Footer from '../components/footer.vue'
	import "../assets/style/index.css";
	export default {
		components: { Footer,
			name:"page",
		},
		data:function(){
			return{
				topheight:0,
				page:{},
				images: [
				'https://haitao.nos.netease.com/6BXWTT4KF3v2CCD1KVT1809182052_960_480.jpg',
				'https://haitao.nosdn2.127.net/ThUbIr9WnE7TbTwTapp-kvAiT1809190053_960_480.jpg',
				'https://haitao.nos.netease.com/f3kJUUtkrDbsiU1LtopkHcBGgT1809182243_960_480.jpg',
				'https://haitao.nosdn2.127.net/EWQ1UI83HQ03U2TLaeShRtEhK19n7175ceTT1809191639_960_480.jpg'
				],
				imagelist: [
					{
						"link": "",
						"src": "https://haitao.nosdn2.127.net/GvpaR0ThVvgBkgT7Vf0yxk2T1809181557_192_220.jpg",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nos.netease.com/EqTdbMtyfOtDzr0DtcTD90hr2T1809031521_192_220.jpg",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nosdn2.127.net/Bkbtx8pB7u6B5S9OCU4Eir2f1T1808171744_192_220.jpg",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nosdn2.127.net/PnANhp9RpFloeI9VhfPXg8T1808171745_192_220.png",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nos.netease.com/HT4D5CRc3ZZRsuRkeCnTT1808171746_192_220.jpg",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nosdn2.127.net/Bkbtx8pB7u6B5S9OCU4Eir2f1T1808171744_192_220.jpg",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nosdn2.127.net/PnANhp9RpFloeI9VhfPXg8T1808171745_192_220.png",
						"title": ""
					},
					{
						"link": "",
						"src": "https://haitao.nos.netease.com/HT4D5CRc3ZZRsuRkeCnTT1808171746_192_220.jpg",
						"title": ""
					}
				],
				goods:[
					{
						"id": 4,
						"title": "Naturie imju 薏仁美白保湿防晒化妆水 500毫升 我是大美人强推 ",
						"price": "55.00",
						"url": "https://haitao.nos.netease.com/50c2fafd909f489e9ebd3418cd90a1711533208260850jkcgm1fq10072.jpg"
					},
					{
						"id": 1,
						"title": "Ryo 吕 棕吕（原黄吕）防脱固发滋养  洗发水*2+护发素*1 500毫升/瓶",
						"price": "105.00",
						"url": "https://haitao.nosdn2.127.net/bc977ba46ed74158b6b3386eaf27f7f81530241584513jizebvc810863.jpg"
					},
					{
						"id": 3,
						"title": "【维持泌尿健康】Swisse 高浓度蔓越莓 30粒/瓶 2瓶",
						"price": "158.00",
						"url": "https://haitao.nosdn1.127.net/onlineic1jqd6p10155.jpg"
					},
					{
						"id": 5,
						"title": "【真正的有机糙米】EARTH'S BEST 有机纯米粉 227克",
						"price": "35.00",
						"url": "https://haitao.nos.netease.com/31f78c55a2114eb5a287b38b6475e5fd1513067124727jb3d3lcr19243.jpg"
					},
					{
						"id": 6,
						"title": "SK-II 嫩肤清莹露 160毫升",
						"price": "358.00",
						"url": "https://haitao.nosdn2.127.net/insm5qxq58_800_800.jpg"
					},
					{
						"id": 7,
						"title": "【领券立减100】SK-II小灯泡30ml套装 (小灯泡30ml+神仙水10ml+清莹露10ml+精华霜2.5g)",
						"price": "1286.00",
						"url": "https://pop.nosdn.127.net/d336d1f7-670d-40b6-ab58-921012c6b176"
					},
					{
						"id": 8,
						"title": "Apple 苹果 iPhone X 64GB 移动联通4G手机 港版",
						"price": "6799.00",
						"url": "https://pop.nosdn.127.net/7936968b-3db1-441d-822b-e9616d01c0f6"
					},
					{
						"id": 9,
						"title": "【不伤宝宝初生牙龈】HAPPY BABY 禧贝婴幼儿温和有机磨牙饼干 香蕉甘薯  48克/盒",
						"price": "56.00",
						"url": "https://haitao.nos.netease.com/485c149f5ceb4d6a837a67910236048715354385972231.jpg"
					},
					{
						"id": 10,
						"title": "Dior 迪奥 粉漾魅惑变色润唇膏 04#橘色 3.5克",
						"price": "179.00",
						"url": "https://haitao.nosdn2.127.net/ix7gkb6581_800_800.jpg"
					},
					{
						"id": 10,
						"title": "ÍpsΛ 茵芙莎 流金岁月美肤水 200毫升",
						"price": "328.00",
						"url": "https://haitao.nosdn2.127.net/0938e26c883f451b9387b9daf6b5ed9d1537025125829jm3l2par10687.jpg"
					}
				]
			}
		},
		created:function(){
			// GetPage().then(response=>{
			// 	this.page=response;
			// });
		},
		methods:{
			settopheight:function(value){
				this.topheight=value;
			},
			onSearch:function(value){
				console.log(value)
			},
		}
	}
</script>
<style lang="css">
	@import "../assets/style/index.css";
	.login_box{
		width: 100%;
		height: 42px;
	}
	.login{
		background: linear-gradient(to bottom,#f94f72,#aa1030);
		color: #fff;
		text-align: center;
		font-size: 16px;
		font-size: 14px;
		height: 42px;
		line-height: 42px;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.van-swipe{
		width: 375px;
		height: 187.5px;
	}
	.van-swipe img{
		width: 375px;
		height: auto;
	}
	.cate_box{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.cate{
		width: 25%;
		white-space: nowrap;
		overflow-x: hidden;
		background-color: #fff;
		font-size: 0;
	}
	.cate a {
		display: block;
		position: relative;
		height: 100%;
	}
	.recommend{
		font-size: 18px;
		width: 100%;
		text-align: center;
		height: 60px;
		line-height: 60px;
		background: #f1f1f1;
	}
	.image-wrapper{
		display: inline-block;
		vertical-align: middle;
		width: 100%;
		margin-right: 0px;
	}
	.good_list{
		overflow: hidden;
		padding: 0 12px;
	}
	.good_item{
		float: left;
		width: 50%;
	}
	.good_item a{
		display: block;
		position: relative;
		min-height: 100px;
		color: #333;
		background-color: inherit;
		margin:3px;
	}
	.good_photo{
		text-align: center;
		overflow: hidden;
		position: relative;
		min-height: 0;
		padding-top: 100%;
		max-height: 500px;
		height: 0;
		z-index: 0;

	}
	.good_photo img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 100%;
		height: auto;
	}
	.good_info{
		position: relative;
		overflow: hidden;
		text-align: center;
	}
	.good_info .title{
		color: #333;
		text-align: left;
		font-size: 14px;
		line-height: 18px;
		word-break: break-all;
		font-weight: initial;
		height: 36px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 6px;
	}
	.sale-info{
		color: #e50f3d;
		font-size: 16px;
		line-height: 1;
	}
</style>