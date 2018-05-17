/*
 * @Author: Lee.mark
 * @Date: 2018-05-17 19:29:20
 * @Last Modified by: Lee.mark
 * @Last Modified time: 2018-05-17 21:45:56
 */

import Vue from 'vue';
import Router from 'vue-router';

// 加载路径中可以使用 @ 绝对路径
// @ 是 src 目录的绝对路径
// @ 后面的 / 别忘了
import Login from '@/components/login/login';
import Home from '@/components/Home/Home';
// 用户列表
import UserList from '@/components/UserList/UserList';

// 挂载路由
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      // 添加子路由,当渲染 children 组件的时候会先把 Home 组件渲染出来
      // 子路由会找到home组件内部的router-view出口
      children: [{
        path: '/users',
        component: UserList
      }]
    },
    {
      path: '/login',
      component: Login
    }
  ]
});

// 使用路由守卫拦截非登陆视图导航
router.beforeEach((to, form, next) => {
  const {
    path
  } = to;
  // 判断路径是否是login
  if (path !== '/login') {
    // 获取本地存储的令牌
    const token = window.localStorage.getItem('token');
    // 如果不是则校验登录状态
    if (!token) {
      // 没有token跳转至login
      next('/login');
    } else {
      // 有token则通过
      next();
    }
  } else {
    // 如过请求的是login,则直接通过
    next();
  }
});

export default router;
