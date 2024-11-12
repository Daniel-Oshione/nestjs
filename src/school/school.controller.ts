import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SchoolService } from './school.service';
import { schoolEntity } from 'src/entity/school.entity';

@Controller('school')
export class SchoolController {
    constructor(private readonly SchoolService: SchoolService){}
    
    @Get()
    findAll(): Promise<schoolEntity[]>{
    return this.SchoolService.findAllSchools()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<schoolEntity | null>{
        return this.SchoolService.findAschool(id)
    }

    @Post()
    create(@Body() schoolData: schoolEntity): Promise<schoolEntity>{
        return this.SchoolService.createSchool(schoolData)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() schoolData: Partial<schoolEntity>): Promise<schoolEntity | null>{
        return this.SchoolService.updateSchool(id, schoolData)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void>{
        return this.SchoolService.deletSchool(id);
    }
}
