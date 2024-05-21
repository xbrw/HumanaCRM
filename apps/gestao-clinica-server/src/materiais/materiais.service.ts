import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MateriaisServiceBase } from "./base/materiais.service.base";

@Injectable()
export class MateriaisService extends MateriaisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
