'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    // 用户列表
    async index() {
        // 拿到数据
        let result = [];
        // 做分页功能
        let page = this.ctx.query.page ? parseInt(this.ctx.query.page) : 1
        let limit = 5;
        let offset = (page - 1) * 5

        // result = await this.app.model.User.findAll()
        let Op = this.app.Sequelize.Op
        result = await this.app.model.User.findAndCountAll({
            where: {
                // sex: "男",
                // username: {
                //     [Op.like]: "%邓%"
                // },
                // id: {
                //     [Op.gt]: 10
                // }
            },
            // attributes: ["id", "username"],
            attributes: {
                // exclude 不包含属性
                exclude: ["password"]
            },
            // 排序
            order: [
                ["updated_at", "DESC"],
                ["id", "DESC"]
            ],
            offset,
            limit
        })

        // 获取url的问号get传值参数
        // this.ctx.query.page;

        // 响应
        this.ctx.body = {
            msg: 'ok',
            data: result
        };
        // 修改状态码
        // this.ctx.status = 200;
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


        // 查询单个
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
                username: "黎小左11",
                password: "密码11",
                sex: "女"
            },
            {
                username: "邓小右11",
                password: "密码22",
                sex: "男"
            },
            {
                username: "黎小左22",
                password: "密码33",
                sex: "女"
            },
            {
                username: "邓小右22",
                password: "密码44",
                sex: "男"
            },
            {
                username: "黎小左33",
                password: "密码55",
                sex: "女"
            },
            {
                username: "邓小右33",
                password: "密码66",
                sex: "男"
            },
        ])

        // 成功
        this.ctx.body = {
            msg: "ok",
            data: res
        };
    }

    // 修改
    async update() {
        // 获取id
        let id = this.ctx.params.id ? parseInt(this.ctx.params.id) : 0
        // id的那条数据
        let data = await this.app.model.User.findByPk(id)
        if(!data) {
            return this.ctx.body = {
                msg: "fail",
                data: "该记录不存在！"
            }
        }
        // data.username = 'username修改'
        // data.sex = '秘密哦'
        // let res = await data.save()

        let params = this.ctx.request.body;
        let res = await data.update(params, {
            // 第二个参数--限制可以修改的字段
            fields: ["username"]
        })
        // let res = await data.update({
        //     username: "postman",
        //     sex: "男"
        // })



        this.ctx.body = {
            msg: "ok",
            data: res
        }



    }
}

module.exports = UserController;
