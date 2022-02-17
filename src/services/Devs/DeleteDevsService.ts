import { getRepository } from "typeorm";
import { Dev } from "../../entities/Devs";

export class DeleteDevService {
  async execute(id: string) {
    const repo = getRepository(Dev);
    
    if(!(await repo.findOne(id))) return new Error("Dev does not exists!");

    return (await repo.delete(id));
  }
}