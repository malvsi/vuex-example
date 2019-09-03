<template>
  <div>
      <ul class="list">
          <li v-for='item in $store.getters.getTitleList' :key='item.title' @click="getTitleHandle(item.title)">{{ item.title }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  methods: {
    getTitleHandle (title) {
      this.$store.commit('setValue', title)
    }
  }
}
</script>

<style>

</style>
