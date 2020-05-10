<template>
  <div class="tab-control">
      <div v-bind:key=item v-for="(item, index) in titles" class="tab-control-item" v-bind:class="{active: index==currentIndex}" v-on:click="itemClick(index)">
          <span>{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
  name:'',
  components:{},
  props:{
      titles: {
          type: Array,
          default: function() {
              return []
          }
      }
  },
  data(){
    return {
        currentIndex: 0
    }
  },
  watch:{},
  computed:{},
  methods:{
      itemClick: function(index) {
        //   console.log("ha")
        this.currentIndex = index;
        this.$emit("tabClick", index)
      }
  },
  created(){},
  mounted(){}
}
</script>

<style>
.tab-control {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
}

.tab-control-item {
    flex: 1;
}

.tab-control-item span {
    padding: 5px;
}

.active {
    color: var(--color-high-text);
}

.active span {
    border-bottom: 2px solid var(--color-tint);
}
</style>