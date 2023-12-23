import { HttpException, Injectable } from '@nestjs/common';
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
        const course = this.courses.find(course => course.id === id)
        if(!course){
            throw new HttpException(`Curso com o id: ${id} não encontrado`, 404)
        }
        return course;
    }
    create(CreateCourseDTO: any){
        this.courses.push(CreateCourseDTO);
        return CreateCourseDTO;
    }
    update(id: number, updateCourseDTO: any){
        const findingCourse = this.findOne(id)
        if(findingCourse as any){
            const index =this.courses.findIndex(course => course.id === id);

            this.courses[index] = {
                 id,
                ...updateCourseDTO
            }
        }

        
    }

    remove(id: number){
        const index =this.courses.findIndex(course => course.id === id);
        if(index >= 0){
            this.courses.splice(index, 1)
        }
    }


}
