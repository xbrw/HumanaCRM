import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsultasServiceBase } from "./base/consultas.service.base";

@Injectable()
export class ConsultasService extends ConsultasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
