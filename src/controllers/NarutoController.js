const NarutoService = require('../services/NarutoService');

class NarutoController {
  service = new NarutoService();
  show = (req, res) => {
    return res.status(200).json(this.service.getNames());
  };
  indexPortuguese = async (req,res) => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'pt-br');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
  indexSpanish = async (req,res) => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'es');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
}

module.exports = new NarutoController();
