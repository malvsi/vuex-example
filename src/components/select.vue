<template>
  <section class="wrap">
    <div class="seatchIpt clearFix">
      <select-input></select-input>
      <list v-show="isShow"></list>
      {{ todo.done }}
      <h1>{{ done }}</h1>
    </div>
  </section>
</template>

<script>
import selectInput from '@/components/selectInput'
import list from '@/components/list'
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      done: ''
    }
  },
  created () {
    this.done = this.getTodoById()(2).done
  },
  computed: {
    // state的映射
    ...mapState({
      isShow: state => state.isShow
    }),
    // getters的映射
    ...mapGetters({
      todo: 'getTodo'
    })
  },
  methods: {
    // mapGetters映射，变成this.getTodoById方法
    ...mapGetters(['getTodoById'])
  },
  components: {
    selectInput,
    list
  }
}
</script>

<style>
</style>
