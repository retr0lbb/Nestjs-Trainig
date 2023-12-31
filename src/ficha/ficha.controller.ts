import { Controller, Get, Post } from '@nestjs/common';
import { FichaService } from './ficha.service';

@Controller('ficha')
export class FichaController {
    constructor(private readonly FichaService: FichaService ) {}

    @Get()
    getFichas(): string{
        return this.FichaService.GetFichas()
    }
    @Post()
    createFicha(body: any){
        return body;
    }


}
