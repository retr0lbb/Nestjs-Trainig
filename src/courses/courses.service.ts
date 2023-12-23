import { Injectable } from '@nestjs/common';
import { Courses } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: Courses[] =[
        {
            id: 1,
            name: "Introdução ao Java",
            desc: "Curso basico introdutorio para o java aprendendo sobre POO",
            tag: ["Java", "Introdução", "POO", "SpringBoot", "BootStrap"],
        }
    ]


    findAll() {
        return this.courses
    }
    findOne(id: number){
        return this.courses.find( course =>{
            course.id === id
        })
    }
    create(CreateCourseDTO: any){
        this.courses.push(CreateCourseDTO)
    }
    update(id: number, updateCourseDTO: any){
        if(!this.findOne(id)){
            return "Error 404"
        }

        const index =this.courses.findIndex(course => course.id === id);

        this.courses[index] = {
             id,
             ...updateCourseDTO
        }
    }
}
