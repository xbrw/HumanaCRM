import * as graphql from "@nestjs/graphql";
import { LeadsResolverBase } from "./base/leads.resolver.base";
import { Leads } from "./base/Leads";
import { LeadsService } from "./leads.service";

@graphql.Resolver(() => Leads)
export class LeadsResolver extends LeadsResolverBase {
  constructor(protected readonly service: LeadsService) {
    super(service);
  }
}
