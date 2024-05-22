import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadsServiceBase } from "./base/leads.service.base";

@Injectable()
export class LeadsService extends LeadsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
