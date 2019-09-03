<template>
  <div>
      <ul class="list">
          <li v-for='item in titleList' :key='item.title' @click="getTitleHandle(item.title)">{{ item.title }}</li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    /* titleList () {
      return this.$store.state.titleList
    } */
    ...mapState({
      titleList: state => state.titleList
    })
  },
  methods: {
    getTitleHandle (title) {
      this.$store.commit('setValue', title)
    }
  }
}
</script>

<style>

</style>
