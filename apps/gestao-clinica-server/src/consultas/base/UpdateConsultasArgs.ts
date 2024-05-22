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
import { ConsultasWhereUniqueInput } from "./ConsultasWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConsultasUpdateInput } from "./ConsultasUpdateInput";

@ArgsType()
class UpdateConsultasArgs {
  @ApiProperty({
    required: true,
    type: () => ConsultasWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConsultasWhereUniqueInput)
  @Field(() => ConsultasWhereUniqueInput, { nullable: false })
  where!: ConsultasWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConsultasUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConsultasUpdateInput)
  @Field(() => ConsultasUpdateInput, { nullable: false })
  data!: ConsultasUpdateInput;
}

export { UpdateConsultasArgs as UpdateConsultasArgs };
