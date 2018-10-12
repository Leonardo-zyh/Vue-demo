import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import PostList from '../components/PostList'
import Article from '../components/Article'
import  UserInfo from '../components/UserInfo';
import SildeBar from '../components/SildeBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main:PostList
      }
    },
    {
      path: '/topic/:id&author=:name',
      name: 'post_content',    
      components: {
        main:Article,
        sildeBar:SildeBar
      }
    },
    {
      path: '/userinfo/:name',
      name: 'user_info',    
      components: {
        main:UserInfo,
      }
    }
  ]
})
// export default new Router({
//   routes: [
//     {
//       path: '/topic/:id',
//       name: 'post_content',    
//       component: {
//         main:Article
//       }
//     }
//   ]
// })