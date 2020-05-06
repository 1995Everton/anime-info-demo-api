const { HunterXHunter } = require('anime-info')

class HunterService {
  getNames() {
    return new HunterXHunter().getListCharacters();
  }
  async getCharacter(name,lang){
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

module.exports = HunterService