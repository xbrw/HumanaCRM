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
import { DespesasService } from "../despesas.service";
import { DespesasCreateInput } from "./DespesasCreateInput";
import { Despesas } from "./Despesas";
import { DespesasFindManyArgs } from "./DespesasFindManyArgs";
import { DespesasWhereUniqueInput } from "./DespesasWhereUniqueInput";
import { DespesasUpdateInput } from "./DespesasUpdateInput";

export class DespesasControllerBase {
  constructor(protected readonly service: DespesasService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Despesas })
  async createDespesas(
    @common.Body() data: DespesasCreateInput
  ): Promise<Despesas> {
    return await this.service.createDespesas({
      data: data,
      select: {
        categoria: true,
        createdAt: true,
        data: true,
        id: true,
        nome: true,
        updatedAt: true,
        valor: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Despesas] })
  @ApiNestedQuery(DespesasFindManyArgs)
  async despesasItems(@common.Req() request: Request): Promise<Despesas[]> {
    const args = plainToClass(DespesasFindManyArgs, request.query);
    return this.service.despesasItems({
      ...args,
      select: {
        categoria: true,
        createdAt: true,
        data: true,
        id: true,
        nome: true,
        updatedAt: true,
        valor: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Despesas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async despesas(
    @common.Param() params: DespesasWhereUniqueInput
  ): Promise<Despesas | null> {
    const result = await this.service.despesas({
      where: params,
      select: {
        categoria: true,
        createdAt: true,
        data: true,
        id: true,
        nome: true,
        updatedAt: true,
        valor: true,
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
  @swagger.ApiOkResponse({ type: Despesas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDespesas(
    @common.Param() params: DespesasWhereUniqueInput,
    @common.Body() data: DespesasUpdateInput
  ): Promise<Despesas | null> {
    try {
      return await this.service.updateDespesas({
        where: params,
        data: data,
        select: {
          categoria: true,
          createdAt: true,
          data: true,
          id: true,
          nome: true,
          updatedAt: true,
          valor: true,
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
  @swagger.ApiOkResponse({ type: Despesas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDespesas(
    @common.Param() params: DespesasWhereUniqueInput
  ): Promise<Despesas | null> {
    try {
      return await this.service.deleteDespesas({
        where: params,
        select: {
          categoria: true,
          createdAt: true,
          data: true,
          id: true,
          nome: true,
          updatedAt: true,
          valor: true,
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
