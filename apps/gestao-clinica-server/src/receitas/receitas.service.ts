import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceitasServiceBase } from "./base/receitas.service.base";

@Injectable()
export class ReceitasService extends ReceitasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
