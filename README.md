> 知识点
## mapGetters和mapMutaions的传餐方式
```bash
  # store中
  const store = new Vuex.Store({
    state: {
      flag: false
    },
    mutations: {
      changeFlag (state, obj) {
        state.flag = obj.flag
      }
    }
  })

  # html
  <div id="app">
    <input type="button" value="change" @click="changeHandle"/>
    <p>{{ $store.state.flag }}</p>
  </div>

  # javascript
  import { mapMutations } from 'vuex'
  new Vue({
    el: '#app',
    data: {
      flag: false
    },
    methods: {
      ...mapMutations('changeFlag'),
      changeHandle () {
        this.changeFlag({flag: true})
      }
    }
  })
```
# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
