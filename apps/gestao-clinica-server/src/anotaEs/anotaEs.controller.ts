import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnotaEsService } from "./anotaEs.service";
import { AnotaEsControllerBase } from "./base/anotaEs.controller.base";

@swagger.ApiTags("anotaEs")
@common.Controller("anotaEs")
export class AnotaEsController extends AnotaEsControllerBase {
  constructor(protected readonly service: AnotaEsService) {
    super(service);
  }
}
