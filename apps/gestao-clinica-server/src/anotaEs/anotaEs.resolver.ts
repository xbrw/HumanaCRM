import * as graphql from "@nestjs/graphql";
import { AnotaEsResolverBase } from "./base/anotaEs.resolver.base";
import { AnotaEs } from "./base/AnotaEs";
import { AnotaEsService } from "./anotaEs.service";

@graphql.Resolver(() => AnotaEs)
export class AnotaEsResolver extends AnotaEsResolverBase {
  constructor(protected readonly service: AnotaEsService) {
    super(service);
  }
}
