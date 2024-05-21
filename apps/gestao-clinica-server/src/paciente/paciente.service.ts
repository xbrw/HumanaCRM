import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PacienteServiceBase } from "./base/paciente.service.base";

@Injectable()
export class PacienteService extends PacienteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
