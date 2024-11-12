import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolModule } from './school/school.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { schoolEntity } from './entity/school.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'qwerty68Y01rhq', //database password
      database: 'firstCRUD', //database name
      entities: [schoolEntity],
      synchronize: false,
    }),
    SchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
