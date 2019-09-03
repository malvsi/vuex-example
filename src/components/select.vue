<template>
  <section class="wrap">
    <div class="seatchIpt clearFix">
      <select-input></select-input>
      <list v-show="isShow"></list>
      {{ isShow }}
    </div>
  </section>
</template>

<script>
import selectInput from '@/components/selectInput'
import list from '@/components/list'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      isShow: state => state.isShow
    })
  },
  components: {
    selectInput,
    list
  }
}
</script>

<style>
</style>
