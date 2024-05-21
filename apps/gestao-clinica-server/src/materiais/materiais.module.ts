import { Module } from "@nestjs/common";
import { MateriaisModuleBase } from "./base/materiais.module.base";
import { MateriaisService } from "./materiais.service";
import { MateriaisController } from "./materiais.controller";
import { MateriaisResolver } from "./materiais.resolver";

@Module({
  imports: [MateriaisModuleBase],
  controllers: [MateriaisController],
  providers: [MateriaisService, MateriaisResolver],
  exports: [MateriaisService],
})
export class MateriaisModule {}
