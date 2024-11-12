import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { schoolEntity } from 'src/entity/school.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolService {
    constructor(
        @InjectRepository(schoolEntity)
        private schoolRepository: Repository<schoolEntity>
    ){}

    findAllSchools(): Promise<schoolEntity[]>{
        return this.schoolRepository.find();
    }

    findAschool(id: number): Promise<schoolEntity | null>{
        return this.schoolRepository.findOneBy({id});
    }

    createSchool(schoolData: schoolEntity): Promise<schoolEntity>{
        const openedSchool = this.schoolRepository.create(schoolData);
        return this.schoolRepository.save(openedSchool);
    }

    async updateSchool(id: number, schoolData: Partial<schoolEntity>): Promise<schoolEntity | null>{
        await this.schoolRepository.update(id, schoolData);
        return this.findAschool(id)
    }

    async deletSchool(id: number): Promise<void>{
        await this.schoolRepository.delete(id)
    }
}
