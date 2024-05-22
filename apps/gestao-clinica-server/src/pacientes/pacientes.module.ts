import { Module } from "@nestjs/common";
import { PacientesModuleBase } from "./base/pacientes.module.base";
import { PacientesService } from "./pacientes.service";
import { PacientesController } from "./pacientes.controller";
import { PacientesResolver } from "./pacientes.resolver";

@Module({
  imports: [PacientesModuleBase],
  controllers: [PacientesController],
  providers: [PacientesService, PacientesResolver],
  exports: [PacientesService],
})
export class PacientesModule {}
