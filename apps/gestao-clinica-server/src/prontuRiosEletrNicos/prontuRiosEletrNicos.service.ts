import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProntuRiosEletrNicosServiceBase } from "./base/prontuRiosEletrNicos.service.base";

@Injectable()
export class ProntuRiosEletrNicosService extends ProntuRiosEletrNicosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
