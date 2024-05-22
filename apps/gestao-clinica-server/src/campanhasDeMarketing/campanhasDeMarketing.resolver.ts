import * as graphql from "@nestjs/graphql";
import { CampanhasDeMarketingResolverBase } from "./base/campanhasDeMarketing.resolver.base";
import { CampanhasDeMarketing } from "./base/CampanhasDeMarketing";
import { CampanhasDeMarketingService } from "./campanhasDeMarketing.service";

@graphql.Resolver(() => CampanhasDeMarketing)
export class CampanhasDeMarketingResolver extends CampanhasDeMarketingResolverBase {
  constructor(protected readonly service: CampanhasDeMarketingService) {
    super(service);
  }
}
