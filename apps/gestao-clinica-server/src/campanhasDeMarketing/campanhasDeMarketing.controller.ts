import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampanhasDeMarketingService } from "./campanhasDeMarketing.service";
import { CampanhasDeMarketingControllerBase } from "./base/campanhasDeMarketing.controller.base";

@swagger.ApiTags("campanhasDeMarketings")
@common.Controller("campanhasDeMarketings")
export class CampanhasDeMarketingController extends CampanhasDeMarketingControllerBase {
  constructor(protected readonly service: CampanhasDeMarketingService) {
    super(service);
  }
}
