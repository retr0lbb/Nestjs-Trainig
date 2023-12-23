import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, StreamableFile } from '@nestjs/common';
import { CoursesService } from './courses.service';


@Controller('courses')
export class CoursesController {


    constructor(private readonly courseService: CoursesService){}


    @Get()
    findAll(@Res() response): string{
        return response.status(200).json({Message: "sucessful", Status: 200, Data: "Cursos"});
    }
    @Get(":id/:name")
    findOne(@Param("id") id:string, @Param("name") name:string){
        return `Curso de ${name}: ${id}`
    }
    @Post()
    createCourse(@Body("name") name: string, @Body("description") desc: string, @Body("tags") tags: Array<string>): string{

        return "Curso criado com sucesso criado com sucesso";
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body: Body, @Res() response){
        response.status(200).json({Id: id, body: body})
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    remove(@Param("id") id:string): string{
        return `Curso com o id ${id} foi removido`
    }
}
