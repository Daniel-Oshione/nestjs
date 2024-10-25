import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interface/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('home')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Post('products')
  // getProducts(){
  //   return this.appService.addProducts();
  // }
  @Post('user')
  async createUser(@Body() payload){
   await this.appService.create(payload);
  }

  @Get()
  async findAllUsers(): Promise<User[]>{
    return await this.appService.findAll();
  }
}
