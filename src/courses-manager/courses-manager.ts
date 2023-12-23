import { Injectable } from '@nestjs/common';


@Injectable()
export class CoursesManager {
    SaveCourse(name: string, description: string, tags: Array<String> ){
        console.log(`O curso com o nome ${name} esta criado no banco de dados`);
    }
}
