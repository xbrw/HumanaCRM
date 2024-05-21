import * as graphql from "@nestjs/graphql";
import { ComunicaOResolverBase } from "./base/comunicaO.resolver.base";
import { ComunicaO } from "./base/ComunicaO";
import { ComunicaOService } from "./comunicaO.service";

@graphql.Resolver(() => ComunicaO)
export class ComunicaOResolver extends ComunicaOResolverBase {
  constructor(protected readonly service: ComunicaOService) {
    super(service);
  }
}
