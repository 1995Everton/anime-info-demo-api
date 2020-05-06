const { Naruto } = require('anime-info')

class NarutoService {
  getNames() {
    return new Naruto().getListCharacters();
  }
  async getCharacter(name,lang){
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

module.exports = NarutoService