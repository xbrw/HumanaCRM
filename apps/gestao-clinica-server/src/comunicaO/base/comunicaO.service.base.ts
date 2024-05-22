/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ComunicaO as PrismaComunicaO } from "@prisma/client";

export class ComunicaOServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComunicaOCountArgs, "select">
  ): Promise<number> {
    return this.prisma.comunicaO.count(args);
  }

  async comunicaOS<T extends Prisma.ComunicaOFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComunicaOFindManyArgs>
  ): Promise<PrismaComunicaO[]> {
    return this.prisma.comunicaO.findMany<Prisma.ComunicaOFindManyArgs>(args);
  }
  async comunicaO<T extends Prisma.ComunicaOFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComunicaOFindUniqueArgs>
  ): Promise<PrismaComunicaO | null> {
    return this.prisma.comunicaO.findUnique(args);
  }
  async createComunicaO<T extends Prisma.ComunicaOCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComunicaOCreateArgs>
  ): Promise<PrismaComunicaO> {
    return this.prisma.comunicaO.create<T>(args);
  }
  async updateComunicaO<T extends Prisma.ComunicaOUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComunicaOUpdateArgs>
  ): Promise<PrismaComunicaO> {
    return this.prisma.comunicaO.update<T>(args);
  }
  async deleteComunicaO<T extends Prisma.ComunicaODeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComunicaODeleteArgs>
  ): Promise<PrismaComunicaO> {
    return this.prisma.comunicaO.delete(args);
  }
}
