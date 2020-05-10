<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper v-bind:banners="banners"></home-swiper>
    <recommend-view v-bind:recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      v-bind:titles="['流行','新款','精选']"
      v-on:tabClick="tabClick"
    ></tab-control>
    <good-list v-bind:goods="goods[currentType].list"></good-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import FeatureView from "views/home/childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "",
  components: {
    NavBar,
    TabControl,
    GoodList,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  props: {},
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop"
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 网络请求相关代码
    getHomeMultidata: function() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods: function(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 事件监听相关的方法
    tabClick: function(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {}
};
</script>

<style>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
}

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 99;
}
</style>