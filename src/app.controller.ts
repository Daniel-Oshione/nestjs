import { Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
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
  @HttpCode(204)
  async createUser(@Body() payload){
   await this.appService.create(payload);
  }

  @Get()
  async findAllUsers(): Promise<User[]>{
    return await this.appService.findAll();
  }

  @Delete('delete')
  async deleteUser(){
    return await this.appService.delete();
  }
}
