import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalasServiceBase } from "./base/salas.service.base";

@Injectable()
export class SalasService extends SalasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
