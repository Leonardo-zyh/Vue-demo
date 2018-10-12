import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import PostList from '../components/PostList'
import Article from '../components/Article'

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
      path: '/topic/:id',
      name: 'post_content',    
      components: {
        main:Article
      }
    },
    {
      path: '/userinfo/:name',
      name: 'user_info',    
      components: {
        main:Article
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