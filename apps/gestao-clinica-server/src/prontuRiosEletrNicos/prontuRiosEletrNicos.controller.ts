import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProntuRiosEletrNicosService } from "./prontuRiosEletrNicos.service";
import { ProntuRiosEletrNicosControllerBase } from "./base/prontuRiosEletrNicos.controller.base";

@swagger.ApiTags("prontuRiosEletrNicos")
@common.Controller("prontuRiosEletrNicos")
export class ProntuRiosEletrNicosController extends ProntuRiosEletrNicosControllerBase {
  constructor(protected readonly service: ProntuRiosEletrNicosService) {
    super(service);
  }
}
