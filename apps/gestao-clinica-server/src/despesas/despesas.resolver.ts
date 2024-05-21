import * as graphql from "@nestjs/graphql";
import { DespesasResolverBase } from "./base/despesas.resolver.base";
import { Despesas } from "./base/Despesas";
import { DespesasService } from "./despesas.service";

@graphql.Resolver(() => Despesas)
export class DespesasResolver extends DespesasResolverBase {
  constructor(protected readonly service: DespesasService) {
    super(service);
  }
}
