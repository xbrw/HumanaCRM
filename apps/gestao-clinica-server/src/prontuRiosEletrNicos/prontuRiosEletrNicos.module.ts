import { Module } from "@nestjs/common";
import { ProntuRiosEletrNicosModuleBase } from "./base/prontuRiosEletrNicos.module.base";
import { ProntuRiosEletrNicosService } from "./prontuRiosEletrNicos.service";
import { ProntuRiosEletrNicosController } from "./prontuRiosEletrNicos.controller";
import { ProntuRiosEletrNicosResolver } from "./prontuRiosEletrNicos.resolver";

@Module({
  imports: [ProntuRiosEletrNicosModuleBase],
  controllers: [ProntuRiosEletrNicosController],
  providers: [ProntuRiosEletrNicosService, ProntuRiosEletrNicosResolver],
  exports: [ProntuRiosEletrNicosService],
})
export class ProntuRiosEletrNicosModule {}
