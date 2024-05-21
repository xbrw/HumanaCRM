import { Module } from "@nestjs/common";
import { AgendamentoModuleBase } from "./base/agendamento.module.base";
import { AgendamentoService } from "./agendamento.service";
import { AgendamentoController } from "./agendamento.controller";
import { AgendamentoResolver } from "./agendamento.resolver";

@Module({
  imports: [AgendamentoModuleBase],
  controllers: [AgendamentoController],
  providers: [AgendamentoService, AgendamentoResolver],
  exports: [AgendamentoService],
})
export class AgendamentoModule {}
