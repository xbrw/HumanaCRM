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
import { AnotaEs } from "./AnotaEs";
import { AnotaEsCountArgs } from "./AnotaEsCountArgs";
import { AnotaEsFindManyArgs } from "./AnotaEsFindManyArgs";
import { AnotaEsFindUniqueArgs } from "./AnotaEsFindUniqueArgs";
import { DeleteAnotaEsArgs } from "./DeleteAnotaEsArgs";
import { AnotaEsService } from "../anotaEs.service";
@graphql.Resolver(() => AnotaEs)
export class AnotaEsResolverBase {
  constructor(protected readonly service: AnotaEsService) {}

  async _anotaEsItemsMeta(
    @graphql.Args() args: AnotaEsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AnotaEs])
  async anotaEsItems(
    @graphql.Args() args: AnotaEsFindManyArgs
  ): Promise<AnotaEs[]> {
    return this.service.anotaEsItems(args);
  }

  @graphql.Query(() => AnotaEs, { nullable: true })
  async anotaEs(
    @graphql.Args() args: AnotaEsFindUniqueArgs
  ): Promise<AnotaEs | null> {
    const result = await this.service.anotaEs(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnotaEs)
  async deleteAnotaEs(
    @graphql.Args() args: DeleteAnotaEsArgs
  ): Promise<AnotaEs | null> {
    try {
      return await this.service.deleteAnotaEs(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}