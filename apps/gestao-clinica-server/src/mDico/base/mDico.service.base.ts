/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MDico as PrismaMDico } from "@prisma/client";

export class MDicoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MDicoCountArgs, "select">): Promise<number> {
    return this.prisma.mDico.count(args);
  }

  async mDicos<T extends Prisma.MDicoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MDicoFindManyArgs>
  ): Promise<PrismaMDico[]> {
    return this.prisma.mDico.findMany<Prisma.MDicoFindManyArgs>(args);
  }
  async mDico<T extends Prisma.MDicoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MDicoFindUniqueArgs>
  ): Promise<PrismaMDico | null> {
    return this.prisma.mDico.findUnique(args);
  }
  async createMDico<T extends Prisma.MDicoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MDicoCreateArgs>
  ): Promise<PrismaMDico> {
    return this.prisma.mDico.create<T>(args);
  }
  async updateMDico<T extends Prisma.MDicoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MDicoUpdateArgs>
  ): Promise<PrismaMDico> {
    return this.prisma.mDico.update<T>(args);
  }
  async deleteMDico<T extends Prisma.MDicoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MDicoDeleteArgs>
  ): Promise<PrismaMDico> {
    return this.prisma.mDico.delete(args);
  }
}