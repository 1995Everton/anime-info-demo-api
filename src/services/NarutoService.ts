import { Naruto } from 'anime-info';
import { Language } from 'anime-info/dist/shared/models';
import { NarutoInfo, NarutoCharacters } from 'anime-info/dist/naruto/models';

export class NarutoService {
  public getNames(): NarutoCharacters[] {
    return new Naruto().getListCharacters();
  }
  public async getCharacter(
    name: any,
    lang: Language
  ): Promise<NarutoInfo | null> {
    const anime = new Naruto({
      lang
    });

    try {
      const character = await anime.getCharacter(name);
      return character;
    } catch (error) {
      return null;
    }
  }
}
