<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style>
.nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.3);
}

.left, .right {
    width: 60px;
}

.center {
    flex: 1;
    color: #fff;
    line-height: 44px;
    font-size: 18px;
}
</style>