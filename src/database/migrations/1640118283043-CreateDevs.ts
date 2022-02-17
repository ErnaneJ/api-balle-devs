import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDevs1640118283043 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "devs",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "name", type: "varchar" },
          { name: "description", type: "varchar" },
          { name: "avatar", type: "varchar" },
          { name: "office", type: "varchar" },
          { name: "nick_github", type: "varchar" },
          { name: "linkedin", type: "varchar" },
          { name: "website", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ]
      })
      )
    }
    
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("devs");
  }
}
  