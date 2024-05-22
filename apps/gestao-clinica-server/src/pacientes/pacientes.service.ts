import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PacientesServiceBase } from "./base/pacientes.service.base";

@Injectable()
export class PacientesService extends PacientesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
