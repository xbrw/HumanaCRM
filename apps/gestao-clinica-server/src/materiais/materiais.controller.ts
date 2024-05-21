import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MateriaisService } from "./materiais.service";
import { MateriaisControllerBase } from "./base/materiais.controller.base";

@swagger.ApiTags("materiais")
@common.Controller("materiais")
export class MateriaisController extends MateriaisControllerBase {
  constructor(protected readonly service: MateriaisService) {
    super(service);
  }
}
