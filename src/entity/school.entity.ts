import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'users'})
export class schoolEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    schoolName: string;

    @Column()
    schoolAddress: string;

    @Column()
    hod: string;

    @Column()
    departments:  string;

    @Column()
    courses: string;

    @Column()
    staffNumber: number;

    @Column()
    studentNumber: number;

    @Column({default: true})
    isAccredited: boolean;
}