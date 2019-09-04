<template>
  <div class="clearFix">
    <input readonly='readonly' class="keyWord" @click='listShowHandle' :value='value'/>
    <input type="button" value="GO">
    <span></span>
  </div>
</template>

<script>
export default {
  computed: {
    value () {
      return this.$store.state.value
    }
  },
  methods: {
    listShowHandle () {
      // 第一种方式
      // this.$store.commit('setIsShow', !this.$store.getters.getIsShow)
      // 第二种方式
      this.$store.commit({
        type: 'SET_IS_SHOW',
        flag: !this.$store.getters.getIsShow
      })
    }
  }
}
</script>

<style>
</style>
