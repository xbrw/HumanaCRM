import * as graphql from "@nestjs/graphql";
import { ProntuRioResolverBase } from "./base/prontuRio.resolver.base";
import { ProntuRio } from "./base/ProntuRio";
import { ProntuRioService } from "./prontuRio.service";

@graphql.Resolver(() => ProntuRio)
export class ProntuRioResolver extends ProntuRioResolverBase {
  constructor(protected readonly service: ProntuRioService) {
    super(service);
  }
}
