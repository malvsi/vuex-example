<template>
  <div class="clearFix">
    <input readonly='readonly' class="keyWord" @click='listShowHandle' :value='$store.getters.getValue'/>
    <input type="button" value="GO">
    <span></span>
  </div>
</template>

<script>
export default {
  methods: {
    listShowHandle () {
      this.$store.commit('setIsShow', !this.$store.getters.getIsShow)
    }
  }
}
</script>

<style>
</style>
