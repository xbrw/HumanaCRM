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
import { AnotaEsService } from "../anotaEs.service";
import { AnotaEsCreateInput } from "./AnotaEsCreateInput";
import { AnotaEs } from "./AnotaEs";
import { AnotaEsFindManyArgs } from "./AnotaEsFindManyArgs";
import { AnotaEsWhereUniqueInput } from "./AnotaEsWhereUniqueInput";
import { AnotaEsUpdateInput } from "./AnotaEsUpdateInput";

export class AnotaEsControllerBase {
  constructor(protected readonly service: AnotaEsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnotaEs })
  async createAnotaEs(
    @common.Body() data: AnotaEsCreateInput
  ): Promise<AnotaEs> {
    return await this.service.createAnotaEs({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AnotaEs] })
  @ApiNestedQuery(AnotaEsFindManyArgs)
  async anotaEsItems(@common.Req() request: Request): Promise<AnotaEs[]> {
    const args = plainToClass(AnotaEsFindManyArgs, request.query);
    return this.service.anotaEsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnotaEs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async anotaEs(
    @common.Param() params: AnotaEsWhereUniqueInput
  ): Promise<AnotaEs | null> {
    const result = await this.service.anotaEs({
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
  @swagger.ApiOkResponse({ type: AnotaEs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAnotaEs(
    @common.Param() params: AnotaEsWhereUniqueInput,
    @common.Body() data: AnotaEsUpdateInput
  ): Promise<AnotaEs | null> {
    try {
      return await this.service.updateAnotaEs({
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
  @swagger.ApiOkResponse({ type: AnotaEs })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAnotaEs(
    @common.Param() params: AnotaEsWhereUniqueInput
  ): Promise<AnotaEs | null> {
    try {
      return await this.service.deleteAnotaEs({
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
