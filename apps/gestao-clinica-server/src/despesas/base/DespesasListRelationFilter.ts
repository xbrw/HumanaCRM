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
import { DespesasWhereInput } from "./DespesasWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DespesasListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DespesasWhereInput,
  })
  @ValidateNested()
  @Type(() => DespesasWhereInput)
  @IsOptional()
  @Field(() => DespesasWhereInput, {
    nullable: true,
  })
  every?: DespesasWhereInput;

  @ApiProperty({
    required: false,
    type: () => DespesasWhereInput,
  })
  @ValidateNested()
  @Type(() => DespesasWhereInput)
  @IsOptional()
  @Field(() => DespesasWhereInput, {
    nullable: true,
  })
  some?: DespesasWhereInput;

  @ApiProperty({
    required: false,
    type: () => DespesasWhereInput,
  })
  @ValidateNested()
  @Type(() => DespesasWhereInput)
  @IsOptional()
  @Field(() => DespesasWhereInput, {
    nullable: true,
  })
  none?: DespesasWhereInput;
}
export { DespesasListRelationFilter as DespesasListRelationFilter };