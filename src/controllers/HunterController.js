const HunterService = require('../services/HunterService');

class HunterController {
  service = new HunterService();
  show = (req, res) => {
    return res.status(200).json(this.service.getNames());
  };
  indexSpanish = async (req,res) => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'es');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
  indexEnglish = async (req,res) => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'en');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
}

module.exports = new HunterController();

