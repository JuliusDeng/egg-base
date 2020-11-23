'use strict';

const Controller = require('egg').Controller;
let demo = [{
    id: 1,
    username: "用户名1",
    nickname: "昵称",
    sex: "男"
}, {
    id: 2,
    username: "用户名2",
    nickname: "昵称",
    sex: "男"
}, {
    id: 3,
    username: "用户名3",
    nickname: "昵称",
    sex: "男"
}, {
    id: 4,
    username: "用户名4",
    nickname: "昵称",
    sex: "男"
}];

class UserController extends Controller {
  async index() {
    this.ctx.query.page
    let result = demo
    this.ctx.body = {
        msg: "ok",
        data: result
    }
    this.ctx.status = 255
  }

  async read() {
      let id = this.ctx.params.id
      this.ctx.body = demo.find(item => item.id == id)
  }

  async create() {
      console.log(this.ctx.request)
      console.log(this.ctx.request.body)
        // 参数验证
        // 写入数据库

        //   成功 
      this.ctx.body = {
          msg: "ok",
          data: {
              username: "用户名",
              nickname: "昵称"
          }
      }
  }

}

module.exports = UserController;
