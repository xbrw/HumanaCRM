import { Module } from "@nestjs/common";
import { ComunicaOModuleBase } from "./base/comunicaO.module.base";
import { ComunicaOService } from "./comunicaO.service";
import { ComunicaOController } from "./comunicaO.controller";
import { ComunicaOResolver } from "./comunicaO.resolver";

@Module({
  imports: [ComunicaOModuleBase],
  controllers: [ComunicaOController],
  providers: [ComunicaOService, ComunicaOResolver],
  exports: [ComunicaOService],
})
export class ComunicaOModule {}
