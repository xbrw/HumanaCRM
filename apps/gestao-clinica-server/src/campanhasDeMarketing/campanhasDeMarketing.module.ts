import { Module } from "@nestjs/common";
import { CampanhasDeMarketingModuleBase } from "./base/campanhasDeMarketing.module.base";
import { CampanhasDeMarketingService } from "./campanhasDeMarketing.service";
import { CampanhasDeMarketingController } from "./campanhasDeMarketing.controller";
import { CampanhasDeMarketingResolver } from "./campanhasDeMarketing.resolver";

@Module({
  imports: [CampanhasDeMarketingModuleBase],
  controllers: [CampanhasDeMarketingController],
  providers: [CampanhasDeMarketingService, CampanhasDeMarketingResolver],
  exports: [CampanhasDeMarketingService],
})
export class CampanhasDeMarketingModule {}
