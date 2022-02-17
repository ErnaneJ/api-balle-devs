import { Request, Response } from 'express';
import { GetAllDevsService } from '../../services/Devs/GetAllDevsService';

export class GetAllDevsController {
  async handle(request: Request, response: Response){
    const service = new GetAllDevsService();
    const devs = await service.execute();
    return response.json(devs);
  }
}