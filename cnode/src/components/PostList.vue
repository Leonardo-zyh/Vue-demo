<template>
  <div class="postList"> 
      <div class="loading" v-if="isLoading">
          <img src="../assets/loading.gif" alt="">
      </div>
      <!-- 主题帖子列表 -->
      <div v-else>
          <ul>
            <li>
              <div class="topbar">
              <span>全部</span>
              <span>精华</span>
              <span>分享</span>
              <span>问答</span>
              <span>招聘</span>
              </div>
            </li>
              <li v-for="(post,index) in posts" :key="index">
                <!-- 头像 -->
                <img :src="post.author.avatar_url" alt="">
                <!-- 浏览量 -->
                <span class="count">
                  <span class="reply_count">{{post.reply_count}}</span>
                  /{{post.visit_count}}
                </span>
                <!-- 帖子分类 -->
                <span :class="[{put_good:(post.good == true),put_top:(post.top==true),
                'topiclist-tab':(post.good == true && post.top != true)}]" >
                {{post | tabFormatter}}
                </span>

                <!-- 标题 -->
                <router-link :to="{
                  name:'post_content',
                  params:{
                    id:post.id
                  }}">
                <span class="title">
                  {{post.title}}
                </span>
                </router-link>
                <span class="timeLastReply">
                  {{post.last_reply_at | formatDate}}
                </span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      isLoading: false,
      posts: [] //页面列表数组
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 42
          }
        })
        .then(res => {
          console.log(res);
          this.isLoading = false; //加载成功，去除动画
          this.posts = res.data.data;
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  },

  beforeMount: function() {
    this.isLoading = true; //加载成功之前显示加载动画
    this.getData(); //页面加载前获取数据
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 30px;
  border-radius: 3px
}
.postList {
  margin: 8px 50px;
  font-size: 16px;
}
</style>
