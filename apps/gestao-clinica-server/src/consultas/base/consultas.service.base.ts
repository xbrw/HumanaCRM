/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Consultas as PrismaConsultas,
  Tratamentos as PrismaTratamentos,
  Pacientes as PrismaPacientes,
} from "@prisma/client";

export class ConsultasServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConsultasCountArgs, "select">
  ): Promise<number> {
    return this.prisma.consultas.count(args);
  }

  async consultasItems<T extends Prisma.ConsultasFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultasFindManyArgs>
  ): Promise<PrismaConsultas[]> {
    return this.prisma.consultas.findMany<Prisma.ConsultasFindManyArgs>(args);
  }
  async consultas<T extends Prisma.ConsultasFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultasFindUniqueArgs>
  ): Promise<PrismaConsultas | null> {
    return this.prisma.consultas.findUnique(args);
  }
  async createConsultas<T extends Prisma.ConsultasCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultasCreateArgs>
  ): Promise<PrismaConsultas> {
    return this.prisma.consultas.create<T>(args);
  }
  async updateConsultas<T extends Prisma.ConsultasUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultasUpdateArgs>
  ): Promise<PrismaConsultas> {
    return this.prisma.consultas.update<T>(args);
  }
  async deleteConsultas<T extends Prisma.ConsultasDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConsultasDeleteArgs>
  ): Promise<PrismaConsultas> {
    return this.prisma.consultas.delete(args);
  }

  async findTratamentosItems(
    parentId: string,
    args: Prisma.TratamentosFindManyArgs
  ): Promise<PrismaTratamentos[]> {
    return this.prisma.consultas
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tratamentosItems(args);
  }

  async getPaciente(parentId: string): Promise<PrismaPacientes | null> {
    return this.prisma.consultas
      .findUnique({
        where: { id: parentId },
      })
      .paciente();
  }
}
