import { Module } from "@nestjs/common";
import { ReceitasModuleBase } from "./base/receitas.module.base";
import { ReceitasService } from "./receitas.service";
import { ReceitasController } from "./receitas.controller";
import { ReceitasResolver } from "./receitas.resolver";

@Module({
  imports: [ReceitasModuleBase],
  controllers: [ReceitasController],
  providers: [ReceitasService, ReceitasResolver],
  exports: [ReceitasService],
})
export class ReceitasModule {}
