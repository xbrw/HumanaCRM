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
import { ReceitasService } from "../receitas.service";
import { ReceitasCreateInput } from "./ReceitasCreateInput";
import { Receitas } from "./Receitas";
import { ReceitasFindManyArgs } from "./ReceitasFindManyArgs";
import { ReceitasWhereUniqueInput } from "./ReceitasWhereUniqueInput";
import { ReceitasUpdateInput } from "./ReceitasUpdateInput";

export class ReceitasControllerBase {
  constructor(protected readonly service: ReceitasService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Receitas })
  async createReceitas(
    @common.Body() data: ReceitasCreateInput
  ): Promise<Receitas> {
    return await this.service.createReceitas({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Receitas] })
  @ApiNestedQuery(ReceitasFindManyArgs)
  async receitasItems(@common.Req() request: Request): Promise<Receitas[]> {
    const args = plainToClass(ReceitasFindManyArgs, request.query);
    return this.service.receitasItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Receitas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async receitas(
    @common.Param() params: ReceitasWhereUniqueInput
  ): Promise<Receitas | null> {
    const result = await this.service.receitas({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Receitas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReceitas(
    @common.Param() params: ReceitasWhereUniqueInput,
    @common.Body() data: ReceitasUpdateInput
  ): Promise<Receitas | null> {
    try {
      return await this.service.updateReceitas({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Receitas })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReceitas(
    @common.Param() params: ReceitasWhereUniqueInput
  ): Promise<Receitas | null> {
    try {
      return await this.service.deleteReceitas({
        where: params,
        select: {
          createdAt: true,
          id: true,
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