import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService){}

    @Get()
    listAllUsers(){
        return this.UserService.getAll()
    }

}