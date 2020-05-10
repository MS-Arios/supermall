<template>
    <swiper>
        <swiper-item v-bind:key="index" v-for="(item, index) in     banners">
        <a v-bind:href="item.link">
            <img v-bind:src="item.image" alt="">
        </a>
        </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name:'',
  components:{
      Swiper,
      SwiperItem
  },
  props:{
      banners: {
          type: Array,
          default: function() {
              return []
          }
      }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>

<style>

</style>