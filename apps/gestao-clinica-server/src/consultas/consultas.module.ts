import { Module } from "@nestjs/common";
import { ConsultasModuleBase } from "./base/consultas.module.base";
import { ConsultasService } from "./consultas.service";
import { ConsultasController } from "./consultas.controller";
import { ConsultasResolver } from "./consultas.resolver";

@Module({
  imports: [ConsultasModuleBase],
  controllers: [ConsultasController],
  providers: [ConsultasService, ConsultasResolver],
  exports: [ConsultasService],
})
export class ConsultasModule {}
