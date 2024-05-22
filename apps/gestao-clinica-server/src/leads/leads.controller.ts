import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadsService } from "./leads.service";
import { LeadsControllerBase } from "./base/leads.controller.base";

@swagger.ApiTags("leads")
@common.Controller("leads")
export class LeadsController extends LeadsControllerBase {
  constructor(protected readonly service: LeadsService) {
    super(service);
  }
}
