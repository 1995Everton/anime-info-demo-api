const { DragonBall } = require('anime-info')

class DragonService {
  getNames() {
    return new DragonBall().getListCharacters();
  }
  async getCharacter(name,lang){
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

module.exports = DragonService
