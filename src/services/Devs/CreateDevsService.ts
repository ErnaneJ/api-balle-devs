import { getRepository } from 'typeorm';
import { Dev } from '../../entities/Devs';

type DevRequest = { name:string; description:string; secret_key:string, avatar:string; office:string; nick_github:string; linkedin:string; website:string; };

export class CreateDevsService {
  async execute( { name, secret_key, description, avatar, office, nick_github, linkedin, website }:DevRequest ): Promise<Dev | Error> {
    const repo = getRepository(Dev);

    if((await repo.findOne({nick_github}))) return new Error('Dev already exists.')

    const user = repo.create({  name, description, avatar, secret_key, office, nick_github, linkedin, website  });

    await repo.save(user);

    return user;
  }
}