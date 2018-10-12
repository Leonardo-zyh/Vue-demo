# cnode

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



#<li v-for="(post,index) in posts" :key="index">
这里的[Vue warn]是指不要用对象或是数组作为key，用string或value作为key。
这里很明显post是对象，:key相当于是索引的作用，提高循环性能，如果循环量较小，不写也可以的。