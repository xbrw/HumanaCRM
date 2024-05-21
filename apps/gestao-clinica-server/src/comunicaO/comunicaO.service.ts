import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComunicaOServiceBase } from "./base/comunicaO.service.base";

@Injectable()
export class ComunicaOService extends ComunicaOServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
