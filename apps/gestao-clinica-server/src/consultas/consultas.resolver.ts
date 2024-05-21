import * as graphql from "@nestjs/graphql";
import { ConsultasResolverBase } from "./base/consultas.resolver.base";
import { Consultas } from "./base/Consultas";
import { ConsultasService } from "./consultas.service";

@graphql.Resolver(() => Consultas)
export class ConsultasResolver extends ConsultasResolverBase {
  constructor(protected readonly service: ConsultasService) {
    super(service);
  }
}
