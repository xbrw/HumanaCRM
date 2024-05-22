import { Module } from "@nestjs/common";
import { EquipamentosModuleBase } from "./base/equipamentos.module.base";
import { EquipamentosService } from "./equipamentos.service";
import { EquipamentosController } from "./equipamentos.controller";
import { EquipamentosResolver } from "./equipamentos.resolver";

@Module({
  imports: [EquipamentosModuleBase],
  controllers: [EquipamentosController],
  providers: [EquipamentosService, EquipamentosResolver],
  exports: [EquipamentosService],
})
export class EquipamentosModule {}
