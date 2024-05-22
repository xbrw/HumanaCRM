import { Module } from "@nestjs/common";
import { ProntuRioModuleBase } from "./base/prontuRio.module.base";
import { ProntuRioService } from "./prontuRio.service";
import { ProntuRioController } from "./prontuRio.controller";
import { ProntuRioResolver } from "./prontuRio.resolver";

@Module({
  imports: [ProntuRioModuleBase],
  controllers: [ProntuRioController],
  providers: [ProntuRioService, ProntuRioResolver],
  exports: [ProntuRioService],
})
export class ProntuRioModule {}
