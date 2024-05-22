import { Module } from "@nestjs/common";
import { ConsultaModuleBase } from "./base/consulta.module.base";
import { ConsultaService } from "./consulta.service";
import { ConsultaController } from "./consulta.controller";
import { ConsultaResolver } from "./consulta.resolver";

@Module({
  imports: [ConsultaModuleBase],
  controllers: [ConsultaController],
  providers: [ConsultaService, ConsultaResolver],
  exports: [ConsultaService],
})
export class ConsultaModule {}
