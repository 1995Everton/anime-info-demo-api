import { NarutoService } from './naruto.service';
import { Response } from 'express';
export declare class NarutoController {
    private narutoService;
    constructor(narutoService: NarutoService);
    getCharacter(name: string, response: Response): Promise<any>;
}
