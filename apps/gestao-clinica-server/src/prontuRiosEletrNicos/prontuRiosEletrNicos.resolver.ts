import * as graphql from "@nestjs/graphql";
import { ProntuRiosEletrNicosResolverBase } from "./base/prontuRiosEletrNicos.resolver.base";
import { ProntuRiosEletrNicos } from "./base/ProntuRiosEletrNicos";
import { ProntuRiosEletrNicosService } from "./prontuRiosEletrNicos.service";

@graphql.Resolver(() => ProntuRiosEletrNicos)
export class ProntuRiosEletrNicosResolver extends ProntuRiosEletrNicosResolverBase {
  constructor(protected readonly service: ProntuRiosEletrNicosService) {
    super(service);
  }
}
