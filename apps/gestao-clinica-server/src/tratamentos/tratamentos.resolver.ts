import * as graphql from "@nestjs/graphql";
import { TratamentosResolverBase } from "./base/tratamentos.resolver.base";
import { Tratamentos } from "./base/Tratamentos";
import { TratamentosService } from "./tratamentos.service";

@graphql.Resolver(() => Tratamentos)
export class TratamentosResolver extends TratamentosResolverBase {
  constructor(protected readonly service: TratamentosService) {
    super(service);
  }
}
