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
import { MateriaisWhereUniqueInput } from "./MateriaisWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MateriaisUpdateInput } from "./MateriaisUpdateInput";

@ArgsType()
class UpdateMateriaisArgs {
  @ApiProperty({
    required: true,
    type: () => MateriaisWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MateriaisWhereUniqueInput)
  @Field(() => MateriaisWhereUniqueInput, { nullable: false })
  where!: MateriaisWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MateriaisUpdateInput,
  })
  @ValidateNested()
  @Type(() => MateriaisUpdateInput)
  @Field(() => MateriaisUpdateInput, { nullable: false })
  data!: MateriaisUpdateInput;
}

export { UpdateMateriaisArgs as UpdateMateriaisArgs };
