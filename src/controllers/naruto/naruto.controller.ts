import { Controller, Get, Param, HttpStatus, Res } from '@nestjs/common';
import { NarutoService } from './naruto.service';
import { Response } from 'express';

@Controller('naruto')
export class NarutoController {

    constructor(private narutoService: NarutoService){}

    @Get(':name')
    public async getCharacter(@Param('name') name: string, @Res() response: Response): Promise<any>{
        try {
            const character = await this.narutoService.getCharacter(name);
            return response.status(HttpStatus.OK).json(character);
        } catch (error) {
            return  response.status(HttpStatus.NOT_FOUND).json({ error : "Not Found"})
        }
       
    }
}
