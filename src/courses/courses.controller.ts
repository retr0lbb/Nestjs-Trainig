import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {CoursesManager} from "../courses-manager/courses-manager"

@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesManager){}

    @Get()
    findAll(){
        return "Listando os cursos";
    }
    @Get(":id/:name")
    findOne(@Param("id") id:string, @Param("name") name:string){
        return `Curso de ${name}: ${id}`
    }

    @Post()
    createCourse(@Body() body): string{
        this.courseService.SaveCourse(body.name, body.description, body.tags);

        return "Curso criado com sucesso criado com sucesso"
    }
}
