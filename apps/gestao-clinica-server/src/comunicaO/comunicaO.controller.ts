import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComunicaOService } from "./comunicaO.service";
import { ComunicaOControllerBase } from "./base/comunicaO.controller.base";

@swagger.ApiTags("comunicaOs")
@common.Controller("comunicaOs")
export class ComunicaOController extends ComunicaOControllerBase {
  constructor(protected readonly service: ComunicaOService) {
    super(service);
  }
}
