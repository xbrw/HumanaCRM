import * as graphql from "@nestjs/graphql";
import { ReceitasResolverBase } from "./base/receitas.resolver.base";
import { Receitas } from "./base/Receitas";
import { ReceitasService } from "./receitas.service";

@graphql.Resolver(() => Receitas)
export class ReceitasResolver extends ReceitasResolverBase {
  constructor(protected readonly service: ReceitasService) {
    super(service);
  }
}
