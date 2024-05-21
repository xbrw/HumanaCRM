import * as graphql from "@nestjs/graphql";
import { MDicoResolverBase } from "./base/mDico.resolver.base";
import { MDico } from "./base/MDico";
import { MDicoService } from "./mDico.service";

@graphql.Resolver(() => MDico)
export class MDicoResolver extends MDicoResolverBase {
  constructor(protected readonly service: MDicoService) {
    super(service);
  }
}
