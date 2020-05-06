import { Request, Response } from 'express';
import { HunterService } from '../services';

class HunterController {
  private service = new HunterService();
  public show = (req: Request, res: Response): Response => {
    return res.status(200).json(this.service.getNames());
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
  public indexEnglish = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const { name } = req.params;
    const character = await this.service.getCharacter(name, 'en');
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(400).json({ error: 'character not found' });
  };
}

export default new HunterController();
