import { getRepository } from "typeorm";
import { Dev } from "../../entities/Devs";

type DevUpdateRequest = { id: string; name: string; description: string; avatar: string; office: string; nick_github: string; linkedin: string; website: string;  };

export class UpdateDevService {
  async execute({ id, name, description, avatar, office, nick_github, linkedin, website }:DevUpdateRequest) {
    const repo = getRepository(Dev);
    let dev = undefined;
    try{
      dev = await repo.findOne(id);
    }catch{
      return new Error("The format of the passed id is not valid and/or the Dev does not exist.");
    }
    if(!dev) return new Error("Dev does not exists!");

    Object.entries({id, name, description, avatar, office, nick_github, linkedin, website  }).map(([key, value]) => {
      dev[key] = value ? value : dev[key]
    });

    await repo.save(dev);
   
    return dev;
  }
}