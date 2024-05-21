/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PacienteService } from "../paciente.service";
import { PacienteCreateInput } from "./PacienteCreateInput";
import { Paciente } from "./Paciente";
import { PacienteFindManyArgs } from "./PacienteFindManyArgs";
import { PacienteWhereUniqueInput } from "./PacienteWhereUniqueInput";
import { PacienteUpdateInput } from "./PacienteUpdateInput";

export class PacienteControllerBase {
  constructor(protected readonly service: PacienteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Paciente })
  async createPaciente(
    @common.Body() data: PacienteCreateInput
  ): Promise<Paciente> {
    return await this.service.createPaciente({
      data: data,
      select: {
        contato: true,
        createdAt: true,
        genero: true,
        id: true,
        idade: true,
        nome: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Paciente] })
  @ApiNestedQuery(PacienteFindManyArgs)
  async pacientes(@common.Req() request: Request): Promise<Paciente[]> {
    const args = plainToClass(PacienteFindManyArgs, request.query);
    return this.service.pacientes({
      ...args,
      select: {
        contato: true,
        createdAt: true,
        genero: true,
        id: true,
        idade: true,
        nome: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Paciente })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paciente(
    @common.Param() params: PacienteWhereUniqueInput
  ): Promise<Paciente | null> {
    const result = await this.service.paciente({
      where: params,
      select: {
        contato: true,
        createdAt: true,
        genero: true,
        id: true,
        idade: true,
        nome: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Paciente })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaciente(
    @common.Param() params: PacienteWhereUniqueInput,
    @common.Body() data: PacienteUpdateInput
  ): Promise<Paciente | null> {
    try {
      return await this.service.updatePaciente({
        where: params,
        data: data,
        select: {
          contato: true,
          createdAt: true,
          genero: true,
          id: true,
          idade: true,
          nome: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Paciente })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaciente(
    @common.Param() params: PacienteWhereUniqueInput
  ): Promise<Paciente | null> {
    try {
      return await this.service.deletePaciente({
        where: params,
        select: {
          contato: true,
          createdAt: true,
          genero: true,
          id: true,
          idade: true,
          nome: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}