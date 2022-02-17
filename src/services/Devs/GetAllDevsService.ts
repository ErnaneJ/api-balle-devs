import { getRepository } from "typeorm";
import { Dev } from "../../entities/Devs";

export class GetAllDevsService {
  async execute() {
    const repo = getRepository(Dev);
    return (await repo.find());
  }
}