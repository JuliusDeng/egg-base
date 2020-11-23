'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg， hello 黎海霞';
  }

  async list() {
    this.ctx.body = "你好，黎"
  }
}

module.exports = HomeController;
