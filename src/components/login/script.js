/*
 * @Author: Lee.mark
 * @Date: 2018-05-15 17:10:46
 * @Last Modified by: Lee.mark
 * @Last Modified time: 2018-05-17 20:10:41
 */

// 引入axios请求包
import axios from 'axios';

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 校验规则
      loginFormRule: {
        username: [],
        password: []
      }
    };
  },
  methods: {
    // 登录按钮事件
    handleLogin () {
      // 获取ref属性
      this.$refs['form'].validate((valid) => {
        // 判断登录信息
        if (!valid) {
          return;
        }
        // 发送post请求
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm).then(res => {
          // 获取data,和meta
          let {
            data,
            meta
          } = res.data;
          // 获取状态信息和状态
          let {
            msg,
            status
          } = meta;
          // 判断请求状态
          if (status === 200) {
            // 请求成功将凭证(令牌)存放到本地,路由守卫会调用
            window.localStorage.setItem('token', data.token);
            // 跳转到首页
            this.$router.push('/');
            // 给与提示信息
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            // 登录不成功提示
          } else if (status === 400) {
            this.$message.error(msg);
          }
        });
      });
    }
  }
};
