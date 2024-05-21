import { Module } from "@nestjs/common";
import { SalasModuleBase } from "./base/salas.module.base";
import { SalasService } from "./salas.service";
import { SalasController } from "./salas.controller";
import { SalasResolver } from "./salas.resolver";

@Module({
  imports: [SalasModuleBase],
  controllers: [SalasController],
  providers: [SalasService, SalasResolver],
  exports: [SalasService],
})
export class SalasModule {}
