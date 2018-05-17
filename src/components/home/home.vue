/*
 * @Author: Lee.mark
 * @Date: 2018-05-17 20:13:49
 * @Last Modified by: Lee.mark
 * @Last Modified time: 2018-05-17 22:23:58
 */

<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <img src="./logo.png" alt="黑马程序员">
        </el-col>
        <el-col :span="16">电商后台管理系统</el-col>
        <el-col :span="4">
          <a @click.prevent="handleLogout" href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <el-menu
        default-active="2"
        class="nav-menu"
        :unique-opened="true"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">角色列表</el-menu-item>
            <el-menu-item index="2-2">权限列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="3-1">商品列表</el-menu-item>
            <el-menu-item index="3-2">分类参数</el-menu-item>
            <el-menu-item index="3-3">商品分类</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="4-1">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="5-1">数据报表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  components: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleLogout () {
      // elementUI 警告提示的dialog
      this.$confirm('确认退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 点击确定,清除登录状态,删除本地存储中的token
        window.localStorage.removeItem('token');
        // 跳转到login
        this.$router.push('/login');
        // 提示信息
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
      }).catch(() => {
        // 点击取消业务
        this.$message({
          type: 'info',
          message: '他取消了退出QAQ'
        });
      });
    }
  }
};
</script>

<style>
.header {
  line-height: 60px;
  background: skyblue;
}

.container,
.aside,
.main,
.nav-menu {
  height: 100%;
}

.aside {
  background-color: #d4dfe4;
}

.main {
  background-color: #eaeef1;
}
</style>
