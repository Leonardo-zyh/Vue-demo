<template>
  <div class="autherinfo">
      <div class="authersummay">
          <div class="topbar">作者</div>
                <router-link :to="{
                    name:'user_info',
                    params:{
                        name:userinfo.loginname
                    }
                }">
                    <img :src="userinfo.avatar_url" alt="">
                </router-link>
      </div>
      <div class="recent_topbar">
          <div class="topbar">作者其他话题</div>
          <ul>
              <li v-for="(list,index) in topclimitby5" :key="index">
                <router-link :to="{
                    name:'post_content',
                    params:{                        
                        id:list.id,
                        name:list.author.loginname
                    }
                } ">
                    {{list.title}}
                </router-link>
              </li>
          </ul>
      </div>
      <div class="recent_replies">
          <div class="topbar">作者最近回复话题</div>
                    <ul>
              <li v-for="(list,index) in replylimitby5" :key="index">
                <router-link :to="{
                    name:'post_content',
                    params:{                        
                        id:list.id,
                        name:list.author.loginname
                    }
                } ">
                    {{list.title}}
                </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "SildeBar",
  data() {
    return {
      userinfo: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          console.log(res);
          this.userinfo = res.data.data;
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  },
  computed: {
    topclimitby5() {
      if (this.userinfo.recent_topics) {//length还未产生，使用报错
        return this.userinfo.recent_topics.slice(0, 5);
      } else {
        return this.userinfo.recent_topics;
      }
    },
    replylimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      } else {
        return this.userinfo.recent_replies;
      }
    }
  },
  beforeMount: function() {
    this.getData(); //页面加载前获取数据
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
