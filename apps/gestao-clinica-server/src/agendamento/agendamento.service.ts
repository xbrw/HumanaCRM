import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgendamentoServiceBase } from "./base/agendamento.service.base";

@Injectable()
export class AgendamentoService extends AgendamentoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
