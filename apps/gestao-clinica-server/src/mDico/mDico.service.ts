import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MDicoServiceBase } from "./base/mDico.service.base";

@Injectable()
export class MDicoService extends MDicoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
