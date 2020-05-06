import { HunterXHunter } from 'anime-info';
import { Language } from 'anime-info/dist/shared/models';
import {
  CharactersHunterXHunter,
  HunterXHunterInfo
} from 'anime-info/dist/hunterxhunter/models';

export class HunterService {
  public getNames(): CharactersHunterXHunter[] {
    return new HunterXHunter().getListCharacters();
  }
  public async getCharacter(
    name: any,
    lang: Language
  ): Promise<HunterXHunterInfo | null> {
    const anime = new HunterXHunter({
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
