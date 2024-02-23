import { Controller, Get, Post } from '@midwayjs/core';

@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }

  @Get('/user/login')
  @Post('/user/login')
  async login() {
    return {
      code: 20000,
      data: {
        token: 'helloweiodfasdfasfsadfsa',
      },
    };
  }

  @Get('/user/logout')
  @Post('/user/logout')
  async logout() {
    return {
      code: 20000,
      data: {
        token: 'helloweiodfasdfasfsadfsa',
      },
    };
  }

  @Get('/user/info')
  @Post('/user/info')
  async info() {
    return {
      code: 20000,
      data: {
        roles: [{}],
        name: 'luffy',
        avatar: 'src',
      },
    };
  }

  @Get('/table/list')
  @Post('/table/list')
  async table() {
    return {
      code: 20000,
      data: {
        items: [{}],
      },
    };
  }
}
