import * as graphql from "@nestjs/graphql";
import { MateriaisResolverBase } from "./base/materiais.resolver.base";
import { Materiais } from "./base/Materiais";
import { MateriaisService } from "./materiais.service";

@graphql.Resolver(() => Materiais)
export class MateriaisResolver extends MateriaisResolverBase {
  constructor(protected readonly service: MateriaisService) {
    super(service);
  }
}
