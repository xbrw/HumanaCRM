/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Salas } from "./Salas";
import { SalasCountArgs } from "./SalasCountArgs";
import { SalasFindManyArgs } from "./SalasFindManyArgs";
import { SalasFindUniqueArgs } from "./SalasFindUniqueArgs";
import { CreateSalasArgs } from "./CreateSalasArgs";
import { UpdateSalasArgs } from "./UpdateSalasArgs";
import { DeleteSalasArgs } from "./DeleteSalasArgs";
import { AgendamentoFindManyArgs } from "../../agendamento/base/AgendamentoFindManyArgs";
import { Agendamento } from "../../agendamento/base/Agendamento";
import { SalasService } from "../salas.service";
@graphql.Resolver(() => Salas)
export class SalasResolverBase {
  constructor(protected readonly service: SalasService) {}

  async _salasItemsMeta(
    @graphql.Args() args: SalasCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Salas])
  async salasItems(@graphql.Args() args: SalasFindManyArgs): Promise<Salas[]> {
    return this.service.salasItems(args);
  }

  @graphql.Query(() => Salas, { nullable: true })
  async salas(
    @graphql.Args() args: SalasFindUniqueArgs
  ): Promise<Salas | null> {
    const result = await this.service.salas(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Salas)
  async createSalas(@graphql.Args() args: CreateSalasArgs): Promise<Salas> {
    return await this.service.createSalas({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Salas)
  async updateSalas(
    @graphql.Args() args: UpdateSalasArgs
  ): Promise<Salas | null> {
    try {
      return await this.service.updateSalas({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Salas)
  async deleteSalas(
    @graphql.Args() args: DeleteSalasArgs
  ): Promise<Salas | null> {
    try {
      return await this.service.deleteSalas(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Agendamento], { name: "agendamentos" })
  async findAgendamentos(
    @graphql.Parent() parent: Salas,
    @graphql.Args() args: AgendamentoFindManyArgs
  ): Promise<Agendamento[]> {
    const results = await this.service.findAgendamentos(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
