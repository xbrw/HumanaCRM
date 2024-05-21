import { Module } from "@nestjs/common";
import { MDicoModuleBase } from "./base/mDico.module.base";
import { MDicoService } from "./mDico.service";
import { MDicoController } from "./mDico.controller";
import { MDicoResolver } from "./mDico.resolver";

@Module({
  imports: [MDicoModuleBase],
  controllers: [MDicoController],
  providers: [MDicoService, MDicoResolver],
  exports: [MDicoService],
})
export class MDicoModule {}
