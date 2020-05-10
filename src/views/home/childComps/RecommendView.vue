<template>
  <div class="recommend">
      <div v-bind:key="index" v-for="(item, index) in recommends" class="recommend-item">
          <a v-bind:href="item.link">
              <img v-bind:src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    recommends: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
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
.recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #ccc;
}

.recommend-item {
    flex: 1;

}

.recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    
}
</style>