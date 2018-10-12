<template>
<div class="header">
  <div class="header-inner"> 
          <img src="../assets/cnodejs_light.svg">
    <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>

    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  background-color: #444;
  height: 50px;
}
.header-inner{
  width: 90%;
  margin: 0 auto;
}
img {
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
ul {
  float: right;
  margin: 15px 15px;
}
li {
  display: inline-block;
}
a {
    color: #ccc;
    font-size: 14px;
    padding: 10px 15px;
    text-shadow: none;
}
</style>
