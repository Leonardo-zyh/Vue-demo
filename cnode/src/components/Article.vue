<template>

  <div class="article">
      <!-- 懒加载 -->
    <div class="loading" v-if="isLoading">
          <img src="../assets/loading.gif" alt="">
      </div>
    <div v-else>
        <div class="topic_header">
            <div class="topic_title"> {{post.title}} </div>
            <ul>
                <li>发布于：{{post.create_at | formatDate}}</li>
                <li>作者：
                    {{post.author.loginname}}
                </li>
                <li>{{post.visit_count}}次浏览 </li>
                <li>来自{{post | tabFormatter}} </li>                
            </ul>
            <div class="topic_content" v-html="post.content"></div>
        </div>
        <div>
            <div class="topbar">回复</div>
            <div v-for="(reply,index) in post.replies" :key="index">
                <div class="replyUp">
                <router-link :to="{}">
                    <img :src="reply.author.avatar_url" alt="">
                </router-link>
                <router-link>
                    <span>{{reply.author.loginname}}</span>
                </router-link>            
                <span>
                    {{index+1}}楼
                </span>
                <span  v-if="reply.ups.length>0">
                    <i class="fa fa-thumbs-o-up" title="点赞"></i>
                    {{reply.ups.length}}
                </span>
                <span v-else></span>
                </div>
                <p v-html="reply.content"></p>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: false,
      post: {} //熟朋友内容属性
    };
  },
  methods: {
    getArticle() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          console.log(res);
          if (res.data.success == true) {
            this.isLoading = false;
            this.post = res.data.data;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  beforeMount: function() {
    this.isLoading = true; //加载成功之前显示加载动画
    this.getArticle(); //页面加载前获取数据
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import url("../assets/markdown-github");

</style>
