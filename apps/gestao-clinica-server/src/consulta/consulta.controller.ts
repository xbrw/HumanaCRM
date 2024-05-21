import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsultaService } from "./consulta.service";
import { ConsultaControllerBase } from "./base/consulta.controller.base";

@swagger.ApiTags("consultas")
@common.Controller("consultas")
export class ConsultaController extends ConsultaControllerBase {
  constructor(protected readonly service: ConsultaService) {
    super(service);
  }
}
