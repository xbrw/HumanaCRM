import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsultaServiceBase } from "./base/consulta.service.base";

@Injectable()
export class ConsultaService extends ConsultaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
