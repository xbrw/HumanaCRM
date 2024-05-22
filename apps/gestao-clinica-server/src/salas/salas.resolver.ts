import * as graphql from "@nestjs/graphql";
import { SalasResolverBase } from "./base/salas.resolver.base";
import { Salas } from "./base/Salas";
import { SalasService } from "./salas.service";

@graphql.Resolver(() => Salas)
export class SalasResolver extends SalasResolverBase {
  constructor(protected readonly service: SalasService) {
    super(service);
  }
}
