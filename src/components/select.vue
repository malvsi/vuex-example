<template>
  <section class="wrap">
    <div class="seatchIpt clearFix">
      <select-input></select-input>
      <list v-show="$store.getters.getIsShow"></list>
    </div>
  </section>
</template>

<script>
import selectInput from '@/components/selectInput'
import list from '@/components/list'

export default {
  components: {
    selectInput,
    list
  }
}
</script>

<style>
</style>
