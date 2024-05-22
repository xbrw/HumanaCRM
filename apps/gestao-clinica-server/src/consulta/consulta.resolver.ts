import * as graphql from "@nestjs/graphql";
import { ConsultaResolverBase } from "./base/consulta.resolver.base";
import { Consulta } from "./base/Consulta";
import { ConsultaService } from "./consulta.service";

@graphql.Resolver(() => Consulta)
export class ConsultaResolver extends ConsultaResolverBase {
  constructor(protected readonly service: ConsultaService) {
    super(service);
  }
}
