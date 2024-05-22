import * as graphql from "@nestjs/graphql";
import { EquipamentosResolverBase } from "./base/equipamentos.resolver.base";
import { Equipamentos } from "./base/Equipamentos";
import { EquipamentosService } from "./equipamentos.service";

@graphql.Resolver(() => Equipamentos)
export class EquipamentosResolver extends EquipamentosResolverBase {
  constructor(protected readonly service: EquipamentosService) {
    super(service);
  }
}
