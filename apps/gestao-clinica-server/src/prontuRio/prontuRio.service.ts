import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProntuRioServiceBase } from "./base/prontuRio.service.base";

@Injectable()
export class ProntuRioService extends ProntuRioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
