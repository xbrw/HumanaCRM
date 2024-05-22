import * as graphql from "@nestjs/graphql";
import { PacienteResolverBase } from "./base/paciente.resolver.base";
import { Paciente } from "./base/Paciente";
import { PacienteService } from "./paciente.service";

@graphql.Resolver(() => Paciente)
export class PacienteResolver extends PacienteResolverBase {
  constructor(protected readonly service: PacienteService) {
    super(service);
  }
}
