<template>
  <div class="tab-bar-item" v-on:click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div v-bind:class="{active: isActive}"> -->
    <div v-bind:style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    path: String,
    acticeColor: {
      type: String,
      default: "#F55576"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  watch: {},
  computed: {
    isActive: function() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle: function() {
      return this.isActive ? {color: this.acticeColor} : {}
    }
  },
  methods: {
    itemClick: function() {
      this.$router.push(this.path)
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
}

/* .active {
  color: #F55576;
} */
</style>