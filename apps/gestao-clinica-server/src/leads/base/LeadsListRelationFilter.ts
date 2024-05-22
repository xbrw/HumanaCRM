/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeadsWhereInput } from "./LeadsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LeadsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LeadsWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadsWhereInput)
  @IsOptional()
  @Field(() => LeadsWhereInput, {
    nullable: true,
  })
  every?: LeadsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeadsWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadsWhereInput)
  @IsOptional()
  @Field(() => LeadsWhereInput, {
    nullable: true,
  })
  some?: LeadsWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeadsWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadsWhereInput)
  @IsOptional()
  @Field(() => LeadsWhereInput, {
    nullable: true,
  })
  none?: LeadsWhereInput;
}
export { LeadsListRelationFilter as LeadsListRelationFilter };
