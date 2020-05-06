import { DragonBall } from 'anime-info';
import { Language } from 'anime-info/dist/shared/models';
import {
  CharactersDragonBall,
  DragonBallInfo
} from 'anime-info/dist/dragonball/models';

export class DragonService {
  public getNames(): CharactersDragonBall[] {
    return new DragonBall().getListCharacters();
  }
  public async getCharacter(
    name: any,
    lang: Language
  ): Promise<DragonBallInfo | null> {
    const anime = new DragonBall({
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
