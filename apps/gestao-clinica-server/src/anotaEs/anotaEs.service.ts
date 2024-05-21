import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnotaEsServiceBase } from "./base/anotaEs.service.base";

@Injectable()
export class AnotaEsService extends AnotaEsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
