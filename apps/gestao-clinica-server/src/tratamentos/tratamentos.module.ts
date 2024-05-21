import { Module } from "@nestjs/common";
import { TratamentosModuleBase } from "./base/tratamentos.module.base";
import { TratamentosService } from "./tratamentos.service";
import { TratamentosController } from "./tratamentos.controller";
import { TratamentosResolver } from "./tratamentos.resolver";

@Module({
  imports: [TratamentosModuleBase],
  controllers: [TratamentosController],
  providers: [TratamentosService, TratamentosResolver],
  exports: [TratamentosService],
})
export class TratamentosModule {}
