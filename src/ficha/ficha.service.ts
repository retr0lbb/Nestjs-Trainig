import { Injectable } from '@nestjs/common';

@Injectable()
export class FichaService {

    GetFichas(): string{
        return "fichas"
    }
}
