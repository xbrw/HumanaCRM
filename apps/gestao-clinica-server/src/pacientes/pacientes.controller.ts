import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PacientesService } from "./pacientes.service";
import { PacientesControllerBase } from "./base/pacientes.controller.base";

@swagger.ApiTags("pacientes")
@common.Controller("pacientes")
export class PacientesController extends PacientesControllerBase {
  constructor(protected readonly service: PacientesService) {
    super(service);
  }
}
