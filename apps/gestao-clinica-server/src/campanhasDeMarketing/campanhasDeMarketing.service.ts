import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampanhasDeMarketingServiceBase } from "./base/campanhasDeMarketing.service.base";

@Injectable()
export class CampanhasDeMarketingService extends CampanhasDeMarketingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
