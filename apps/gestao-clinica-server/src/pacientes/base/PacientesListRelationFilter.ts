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
import { PacientesWhereInput } from "./PacientesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PacientesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PacientesWhereInput,
  })
  @ValidateNested()
  @Type(() => PacientesWhereInput)
  @IsOptional()
  @Field(() => PacientesWhereInput, {
    nullable: true,
  })
  every?: PacientesWhereInput;

  @ApiProperty({
    required: false,
    type: () => PacientesWhereInput,
  })
  @ValidateNested()
  @Type(() => PacientesWhereInput)
  @IsOptional()
  @Field(() => PacientesWhereInput, {
    nullable: true,
  })
  some?: PacientesWhereInput;

  @ApiProperty({
    required: false,
    type: () => PacientesWhereInput,
  })
  @ValidateNested()
  @Type(() => PacientesWhereInput)
  @IsOptional()
  @Field(() => PacientesWhereInput, {
    nullable: true,
  })
  none?: PacientesWhereInput;
}
export { PacientesListRelationFilter as PacientesListRelationFilter };