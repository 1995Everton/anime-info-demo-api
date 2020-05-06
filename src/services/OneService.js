const { OnePunchMan } = require('anime-info')

class OneService {
  getNames() {
    return new OnePunchMan().getListCharacters();
  }
  async getCharacter(name,lang){
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

module.exports = OneService