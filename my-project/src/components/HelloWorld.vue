<template>
  <div class="hello">
    <h1>Hellow World</h1>
    <h2>{{ msg }}</h2>
    <h2>{{$route.params.msg}}</h2>
    
  </div>
</template>

<script>
import axios from 'axios'
//Vue.prototype.$http = axios;
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1{color: red;}
</style>
