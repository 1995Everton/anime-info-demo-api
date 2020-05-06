import { OnePunchMan } from 'anime-info';
import { Language } from 'anime-info/dist/shared/models';
import {
  CharactersOnePunchMan,
  OnePunchManInfo
} from 'anime-info/dist/onepunchman/models';

export class OneService {
  public getNames(): CharactersOnePunchMan[] {
    return new OnePunchMan().getListCharacters();
  }
  public async getCharacter(
    name: any,
    lang: Language
  ): Promise<OnePunchManInfo | null> {
    const anime = new OnePunchMan({
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
