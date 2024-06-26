/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SalasWhereUniqueInput } from "./SalasWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SalasUpdateInput } from "./SalasUpdateInput";

@ArgsType()
class UpdateSalasArgs {
  @ApiProperty({
    required: true,
    type: () => SalasWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalasWhereUniqueInput)
  @Field(() => SalasWhereUniqueInput, { nullable: false })
  where!: SalasWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SalasUpdateInput,
  })
  @ValidateNested()
  @Type(() => SalasUpdateInput)
  @Field(() => SalasUpdateInput, { nullable: false })
  data!: SalasUpdateInput;
}

export { UpdateSalasArgs as UpdateSalasArgs };
