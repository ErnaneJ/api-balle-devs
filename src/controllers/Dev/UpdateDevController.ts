import { Request, Response } from 'express';
import { UpdateDevService } from '../../services/Devs/UpdateDevsService';

export class UpdateDevController {
  async handle(request: Request, response: Response){
    const {id} = request.params;
    const { name, description, avatar, office, nick_github, linkedin, website  } = request.body;

    const service = new UpdateDevService();
    const result = await service.execute({ id, name, description, avatar, office, nick_github, linkedin, website  });

    if(result instanceof Error) return response.status(400).json(result.message);

    return response.json(result);
  }
}