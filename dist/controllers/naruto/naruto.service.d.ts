import { Naruto } from 'anime-info';
import { Info } from 'anime-info/lib/app/naruto/models';
export declare class NarutoService {
    naruto: Naruto;
    constructor();
    getCharacter(name: string): Promise<Info>;
}
