import { Request, Response } from 'express';
import { DeleteDevService } from '../../services/Devs/DeleteDevsService';

export class DeleteDevController {
  async handle(request: Request, response: Response){
    const { id } = request.params;

    const service = new DeleteDevService();
    const result = await service.execute(id);

    if(result instanceof Error) return response.status(400).json(result.message);
    
    return response.json('User successfully deleted.');
  }
}