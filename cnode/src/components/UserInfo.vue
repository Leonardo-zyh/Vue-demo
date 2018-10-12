<template>
  <div class="UserInfo">
          <!-- 懒加载 -->
    <div class="loading" v-if="isLoading">
          <img src="../assets/loading.gif" alt="">
      </div>
    <div class="userInfomation" v-else>
        <section>
            <img :src="userInfo.avatar_url" alt="">
            <span>{{userInfo.loginname}}</span>
            <p>
                {{userInfo.scroe}}积分
            </p>
            <p>
                注册时间：{{userInfo.create_at | formatDate}}
            </p>
        </section>
        <div class="replies">
            <p>回复的主题</p>
            <ul>
                <li v-for="(item,index) in userInfo.recent_replies" :key="index">
                <router-link :to="{
                    name:'post_content',
                    params:{                        
                        id:item.id
                    }
                } ">
                    {{item.title}}
                </router-link>
                </li>
            </ul>
        </div>
        <div class="topics">
            <p>创建的主题</p>
            <ul>
                <li v-for="(item,index) in userInfo.recent_topics" :key="index">
                <router-link :to="{
                    name:'post_content',
                    params:{                        
                        id:item.id
                    }
                } ">
                    {{item.title}}
                </router-link>                    
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data() {
    return {
      isLoading: false,
      userInfo: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`, {
          params: {
            page: 1,
            limit: 42
          }
        })
        .then(res => {
          console.log(res);
          this.isLoading = false; //加载成功，去除动画
          this.userInfo = res.data.data;
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
</style>
