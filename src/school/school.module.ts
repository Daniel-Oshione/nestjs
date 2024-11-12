import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { schoolEntity } from 'src/entity/school.entity';

@Module({
  imports: [TypeOrmModule.forFeature([schoolEntity])],
  controllers: [SchoolController],
  providers: [SchoolService]
})
export class SchoolModule {}
