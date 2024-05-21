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
import { LeadsService } from "../leads.service";
import { LeadsCreateInput } from "./LeadsCreateInput";
import { Leads } from "./Leads";
import { LeadsFindManyArgs } from "./LeadsFindManyArgs";
import { LeadsWhereUniqueInput } from "./LeadsWhereUniqueInput";
import { LeadsUpdateInput } from "./LeadsUpdateInput";

export class LeadsControllerBase {
  constructor(protected readonly service: LeadsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Leads })
  async createLeads(@common.Body() data: LeadsCreateInput): Promise<Leads> {
    return await this.service.createLeads({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        nome: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Leads] })
  @ApiNestedQuery(LeadsFindManyArgs)
  async leadsItems(@common.Req() request: Request): Promise<Leads[]> {
    const args = plainToClass(LeadsFindManyArgs, request.query);
    return this.service.leadsItems({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        nome: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Leads })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async leads(
    @common.Param() params: LeadsWhereUniqueInput
  ): Promise<Leads | null> {
    const result = await this.service.leads({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        nome: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Leads })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLeads(
    @common.Param() params: LeadsWhereUniqueInput,
    @common.Body() data: LeadsUpdateInput
  ): Promise<Leads | null> {
    try {
      return await this.service.updateLeads({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          nome: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Leads })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLeads(
    @common.Param() params: LeadsWhereUniqueInput
  ): Promise<Leads | null> {
    try {
      return await this.service.deleteLeads({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          nome: true,
          status: true,
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