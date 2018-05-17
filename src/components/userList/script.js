/*
 * @Author: Lee.mark
 * @Date: 2018-05-17 20:39:32
 * @Last Modified by: Lee.mark
 * @Last Modified time: 2018-05-17 20:51:40
 */

// 导入axios请求包
import axios from 'axios';

export default {
  created () {
    // 必须在服务器接口请求头中通过 Authorization字段 提供token
    axios.get('http://localhost:8888/api/private/v1/users', {
      headers: {
        // 在请求头中使用 Authorization 字段提供 token 令牌
        Authorization: window.localStorage.getItem('token')
      },
      params: { // 用来指定请求的查询字符串
        pagenum: 1, // 获取的页数
        pagesize: 5 // h获取每页显示的几条数据
      }
    }).then(res => {
      // 获取data
      const {
        data,
        meta
      } = res.data;
      // 判断状态码
      if (meta.status === 200) {
        this.tableData = data.users;
      }
    });
  },
  data () {
    return {
      tableData: []
    };
  }
};
