import * as graphql from "@nestjs/graphql";
import { AgendamentoResolverBase } from "./base/agendamento.resolver.base";
import { Agendamento } from "./base/Agendamento";
import { AgendamentoService } from "./agendamento.service";

@graphql.Resolver(() => Agendamento)
export class AgendamentoResolver extends AgendamentoResolverBase {
  constructor(protected readonly service: AgendamentoService) {
    super(service);
  }
}
