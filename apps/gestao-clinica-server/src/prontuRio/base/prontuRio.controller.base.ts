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
import { ProntuRioService } from "../prontuRio.service";
import { ProntuRioCreateInput } from "./ProntuRioCreateInput";
import { ProntuRio } from "./ProntuRio";
import { ProntuRioFindManyArgs } from "./ProntuRioFindManyArgs";
import { ProntuRioWhereUniqueInput } from "./ProntuRioWhereUniqueInput";
import { ProntuRioUpdateInput } from "./ProntuRioUpdateInput";

export class ProntuRioControllerBase {
  constructor(protected readonly service: ProntuRioService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProntuRio })
  async createProntuRio(
    @common.Body() data: ProntuRioCreateInput
  ): Promise<ProntuRio> {
    return await this.service.createProntuRio({
      data: data,
      select: {
        createdAt: true,
        data: true,
        diagnostico: true,
        id: true,
        medicamentos: true,
        tratamento: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProntuRio] })
  @ApiNestedQuery(ProntuRioFindManyArgs)
  async prontuRios(@common.Req() request: Request): Promise<ProntuRio[]> {
    const args = plainToClass(ProntuRioFindManyArgs, request.query);
    return this.service.prontuRios({
      ...args,
      select: {
        createdAt: true,
        data: true,
        diagnostico: true,
        id: true,
        medicamentos: true,
        tratamento: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProntuRio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async prontuRio(
    @common.Param() params: ProntuRioWhereUniqueInput
  ): Promise<ProntuRio | null> {
    const result = await this.service.prontuRio({
      where: params,
      select: {
        createdAt: true,
        data: true,
        diagnostico: true,
        id: true,
        medicamentos: true,
        tratamento: true,
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
  @swagger.ApiOkResponse({ type: ProntuRio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProntuRio(
    @common.Param() params: ProntuRioWhereUniqueInput,
    @common.Body() data: ProntuRioUpdateInput
  ): Promise<ProntuRio | null> {
    try {
      return await this.service.updateProntuRio({
        where: params,
        data: data,
        select: {
          createdAt: true,
          data: true,
          diagnostico: true,
          id: true,
          medicamentos: true,
          tratamento: true,
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
  @swagger.ApiOkResponse({ type: ProntuRio })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProntuRio(
    @common.Param() params: ProntuRioWhereUniqueInput
  ): Promise<ProntuRio | null> {
    try {
      return await this.service.deleteProntuRio({
        where: params,
        select: {
          createdAt: true,
          data: true,
          diagnostico: true,
          id: true,
          medicamentos: true,
          tratamento: true,
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