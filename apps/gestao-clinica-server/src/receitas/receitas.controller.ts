import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReceitasService } from "./receitas.service";
import { ReceitasControllerBase } from "./base/receitas.controller.base";

@swagger.ApiTags("receitas")
@common.Controller("receitas")
export class ReceitasController extends ReceitasControllerBase {
  constructor(protected readonly service: ReceitasService) {
    super(service);
  }
}
