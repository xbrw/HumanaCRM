import { Module } from "@nestjs/common";
import { AnotaEsModuleBase } from "./base/anotaEs.module.base";
import { AnotaEsService } from "./anotaEs.service";
import { AnotaEsController } from "./anotaEs.controller";
import { AnotaEsResolver } from "./anotaEs.resolver";

@Module({
  imports: [AnotaEsModuleBase],
  controllers: [AnotaEsController],
  providers: [AnotaEsService, AnotaEsResolver],
  exports: [AnotaEsService],
})
export class AnotaEsModule {}
