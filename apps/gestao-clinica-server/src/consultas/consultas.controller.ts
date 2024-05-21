import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsultasService } from "./consultas.service";
import { ConsultasControllerBase } from "./base/consultas.controller.base";

@swagger.ApiTags("consultas")
@common.Controller("consultas")
export class ConsultasController extends ConsultasControllerBase {
  constructor(protected readonly service: ConsultasService) {
    super(service);
  }
}
