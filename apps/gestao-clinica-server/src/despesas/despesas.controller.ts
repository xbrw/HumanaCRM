import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DespesasService } from "./despesas.service";
import { DespesasControllerBase } from "./base/despesas.controller.base";

@swagger.ApiTags("despesas")
@common.Controller("despesas")
export class DespesasController extends DespesasControllerBase {
  constructor(protected readonly service: DespesasService) {
    super(service);
  }
}
