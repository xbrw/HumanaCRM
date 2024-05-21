import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TratamentosServiceBase } from "./base/tratamentos.service.base";

@Injectable()
export class TratamentosService extends TratamentosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
