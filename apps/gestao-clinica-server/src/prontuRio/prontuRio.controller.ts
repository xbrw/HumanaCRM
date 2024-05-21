import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProntuRioService } from "./prontuRio.service";
import { ProntuRioControllerBase } from "./base/prontuRio.controller.base";

@swagger.ApiTags("prontuRios")
@common.Controller("prontuRios")
export class ProntuRioController extends ProntuRioControllerBase {
  constructor(protected readonly service: ProntuRioService) {
    super(service);
  }
}
