import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';


@Controller('courses')
export class CoursesController {


    constructor(private readonly courseService: CoursesService){}


    @Get()
    findAll(){
        return this.courseService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id: number){
        return this.courseService.findOne(id);
    }
    
    @Post()
    createCourse(@Body() CreateCourseDTO: CreateCourseDTO){

        return this.courseService.create(CreateCourseDTO);
    }

    @Put(":id")
    update(@Param("id") id:number, @Body() UpdateCourseDTO: UpdateCourseDTO){
        return this.courseService.update(id, UpdateCourseDTO)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    remove(@Param("id") id:number){
        return this.courseService.remove(id)
    }
}
