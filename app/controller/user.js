'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 用户列表
    async index() {
        // 拿到数据
        let result = demo;
        // 获取url的问号get传值参数
        this.ctx.query.page;
        // 响应
        this.ctx.body = {
            msg: 'ok',
            data: result
        };
        // 修改状态码
        this.ctx.status = 201;
    }

    // 读取某个用户数据
    async read() {
        let id = parseInt(this.ctx.params.id);
        // 通过主键查询单个数据
        // let detail = await this.app.model.User.findByPk(id);
        // if (!detail) {
        //     return this.ctx.body = {
        //         msg: "fail",
        //         data: "用户不存在啊"
        //     }
        // }


        let detail = await this.app.model.User.findOne({
            where: {
                id,
                sex: "女"
            }
        })

        this.ctx.body = {
            msg: 'ok',
            data: detail
        };
    }

    // 创建用户
    async create() {
        // 参数验证
        // 写入数据库

        // 单个新增
        // let res = await this.app.model.User.create({
        //     username: "我小黎啊",
        //     password: "123456",
        //     sex: "女"
        // });

        // 批量新增
        let res = await this.app.model.User.bulkCreate([
            {
                username: "黎小左",
                password: "密码1",
                sex: "女"
            },
            {
                username: "邓小右",
                password: "密码2",
                sex: "男"
            },
            {
                username: "黎小左2",
                password: "密码3",
                sex: "女"
            },
            {
                username: "邓小右2",
                password: "密码4",
                sex: "男"
            },
            {
                username: "黎小左3",
                password: "密码5",
                sex: "女"
            },
            {
                username: "邓小右3",
                password: "密码6",
                sex: "男"
            },
        ])

        // 成功
        this.ctx.body = {
            msg: "ok",
            data: res
        };
    }
}

module.exports = UserController;
