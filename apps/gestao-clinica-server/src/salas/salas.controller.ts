import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalasService } from "./salas.service";
import { SalasControllerBase } from "./base/salas.controller.base";

@swagger.ApiTags("salas")
@common.Controller("salas")
export class SalasController extends SalasControllerBase {
  constructor(protected readonly service: SalasService) {
    super(service);
  }
}
