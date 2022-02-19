import { Request, Response } from 'express';
import { CreateDevsService } from '../../services/Devs/CreateDevsService';

export class CreateDevController {
  async handle(request: Request, response: Response){
    const { name, secret_key, description, avatar, office, nick_github, linkedin, website } = request.body;
    
    const service = new CreateDevsService();

    const result = await service.execute({ name, description, avatar, secret_key, office, nick_github, linkedin, website });

    if(result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }
}