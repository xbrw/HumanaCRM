import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TratamentosService } from "./tratamentos.service";
import { TratamentosControllerBase } from "./base/tratamentos.controller.base";

@swagger.ApiTags("tratamentos")
@common.Controller("tratamentos")
export class TratamentosController extends TratamentosControllerBase {
  constructor(protected readonly service: TratamentosService) {
    super(service);
  }
}
