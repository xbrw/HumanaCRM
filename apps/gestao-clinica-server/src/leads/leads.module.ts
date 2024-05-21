import { Module } from "@nestjs/common";
import { LeadsModuleBase } from "./base/leads.module.base";
import { LeadsService } from "./leads.service";
import { LeadsController } from "./leads.controller";
import { LeadsResolver } from "./leads.resolver";

@Module({
  imports: [LeadsModuleBase],
  controllers: [LeadsController],
  providers: [LeadsService, LeadsResolver],
  exports: [LeadsService],
})
export class LeadsModule {}
