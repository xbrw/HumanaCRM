import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EquipamentosServiceBase } from "./base/equipamentos.service.base";

@Injectable()
export class EquipamentosService extends EquipamentosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
