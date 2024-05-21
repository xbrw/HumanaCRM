import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipamentosService } from "./equipamentos.service";
import { EquipamentosControllerBase } from "./base/equipamentos.controller.base";

@swagger.ApiTags("equipamentos")
@common.Controller("equipamentos")
export class EquipamentosController extends EquipamentosControllerBase {
  constructor(protected readonly service: EquipamentosService) {
    super(service);
  }
}
