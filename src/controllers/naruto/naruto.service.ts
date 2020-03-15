import { Injectable } from '@nestjs/common';
import { Naruto } from 'anime-info'
import { Info } from 'anime-info/lib/app/naruto/models';
@Injectable()
export class NarutoService {

    naruto: Naruto;

    constructor(){
        this.naruto = new Naruto()
    }
    
    public async getCharacter(name: string): Promise<Info>{
        return await this.naruto.getCharacter(name);
        
    }
}
