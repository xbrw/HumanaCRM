import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MDicoService } from "./mDico.service";
import { MDicoControllerBase } from "./base/mDico.controller.base";

@swagger.ApiTags("mDicos")
@common.Controller("mDicos")
export class MDicoController extends MDicoControllerBase {
  constructor(protected readonly service: MDicoService) {
    super(service);
  }
}
