import * as graphql from "@nestjs/graphql";
import { PacientesResolverBase } from "./base/pacientes.resolver.base";
import { Pacientes } from "./base/Pacientes";
import { PacientesService } from "./pacientes.service";

@graphql.Resolver(() => Pacientes)
export class PacientesResolver extends PacientesResolverBase {
  constructor(protected readonly service: PacientesService) {
    super(service);
  }
}
