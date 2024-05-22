import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgendamentoService } from "./agendamento.service";
import { AgendamentoControllerBase } from "./base/agendamento.controller.base";

@swagger.ApiTags("agendamentos")
@common.Controller("agendamentos")
export class AgendamentoController extends AgendamentoControllerBase {
  constructor(protected readonly service: AgendamentoService) {
    super(service);
  }
}
