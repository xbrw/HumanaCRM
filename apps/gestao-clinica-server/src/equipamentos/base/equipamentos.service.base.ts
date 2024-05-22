/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Equipamentos as PrismaEquipamentos } from "@prisma/client";

export class EquipamentosServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EquipamentosCountArgs, "select">
  ): Promise<number> {
    return this.prisma.equipamentos.count(args);
  }

  async equipamentosItems<T extends Prisma.EquipamentosFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentosFindManyArgs>
  ): Promise<PrismaEquipamentos[]> {
    return this.prisma.equipamentos.findMany<Prisma.EquipamentosFindManyArgs>(
      args
    );
  }
  async equipamentos<T extends Prisma.EquipamentosFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentosFindUniqueArgs>
  ): Promise<PrismaEquipamentos | null> {
    return this.prisma.equipamentos.findUnique(args);
  }
  async createEquipamentos<T extends Prisma.EquipamentosCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentosCreateArgs>
  ): Promise<PrismaEquipamentos> {
    return this.prisma.equipamentos.create<T>(args);
  }
  async updateEquipamentos<T extends Prisma.EquipamentosUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentosUpdateArgs>
  ): Promise<PrismaEquipamentos> {
    return this.prisma.equipamentos.update<T>(args);
  }
  async deleteEquipamentos<T extends Prisma.EquipamentosDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EquipamentosDeleteArgs>
  ): Promise<PrismaEquipamentos> {
    return this.prisma.equipamentos.delete(args);
  }
}
