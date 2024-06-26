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
import { MDicoWhereInput } from "./MDicoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MDicoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MDicoWhereInput,
  })
  @ValidateNested()
  @Type(() => MDicoWhereInput)
  @IsOptional()
  @Field(() => MDicoWhereInput, {
    nullable: true,
  })
  every?: MDicoWhereInput;

  @ApiProperty({
    required: false,
    type: () => MDicoWhereInput,
  })
  @ValidateNested()
  @Type(() => MDicoWhereInput)
  @IsOptional()
  @Field(() => MDicoWhereInput, {
    nullable: true,
  })
  some?: MDicoWhereInput;

  @ApiProperty({
    required: false,
    type: () => MDicoWhereInput,
  })
  @ValidateNested()
  @Type(() => MDicoWhereInput)
  @IsOptional()
  @Field(() => MDicoWhereInput, {
    nullable: true,
  })
  none?: MDicoWhereInput;
}
export { MDicoListRelationFilter as MDicoListRelationFilter };
