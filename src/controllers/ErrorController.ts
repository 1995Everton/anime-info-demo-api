import { Request, Response } from 'express';

class ErrorController {
  public error(req: Request, res: Response): Response {
    return res.status(400).json({ error: 'route not found' });
  }
}

export default new ErrorController();
