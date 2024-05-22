import { Module } from "@nestjs/common";
import { PacienteModuleBase } from "./base/paciente.module.base";
import { PacienteService } from "./paciente.service";
import { PacienteController } from "./paciente.controller";
import { PacienteResolver } from "./paciente.resolver";

@Module({
  imports: [PacienteModuleBase],
  controllers: [PacienteController],
  providers: [PacienteService, PacienteResolver],
  exports: [PacienteService],
})
export class PacienteModule {}
