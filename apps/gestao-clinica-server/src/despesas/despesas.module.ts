import { Module } from "@nestjs/common";
import { DespesasModuleBase } from "./base/despesas.module.base";
import { DespesasService } from "./despesas.service";
import { DespesasController } from "./despesas.controller";
import { DespesasResolver } from "./despesas.resolver";

@Module({
  imports: [DespesasModuleBase],
  controllers: [DespesasController],
  providers: [DespesasService, DespesasResolver],
  exports: [DespesasService],
})
export class DespesasModule {}
