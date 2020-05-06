import { Request, Response } from 'express';
import { NarutoService } from '../services';

class NarutoController {
  private service = new NarutoService();
  public show = (req: Request, res: Response): Response => {
    return res.status(200).json(this.service.getNames());
  };
  public indexPortuguese = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'pt-br');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
  public indexSpanish = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'es');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
}

export default new NarutoController();
