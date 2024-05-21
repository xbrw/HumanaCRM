import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DespesasServiceBase } from "./base/despesas.service.base";

@Injectable()
export class DespesasService extends DespesasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
