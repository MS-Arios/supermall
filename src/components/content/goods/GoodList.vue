<template>
  <div class="goods">
      <good-list-item v-bind:key=index v-for="(item, index) in goods" v-bind:goodsItem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodsListItem"

export default {
  name:'',
  components:{
      GoodListItem
  },
  props:{
      goods: {
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
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
}

</style>