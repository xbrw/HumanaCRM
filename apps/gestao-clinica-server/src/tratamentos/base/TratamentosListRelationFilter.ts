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
import { TratamentosWhereInput } from "./TratamentosWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TratamentosListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TratamentosWhereInput,
  })
  @ValidateNested()
  @Type(() => TratamentosWhereInput)
  @IsOptional()
  @Field(() => TratamentosWhereInput, {
    nullable: true,
  })
  every?: TratamentosWhereInput;

  @ApiProperty({
    required: false,
    type: () => TratamentosWhereInput,
  })
  @ValidateNested()
  @Type(() => TratamentosWhereInput)
  @IsOptional()
  @Field(() => TratamentosWhereInput, {
    nullable: true,
  })
  some?: TratamentosWhereInput;

  @ApiProperty({
    required: false,
    type: () => TratamentosWhereInput,
  })
  @ValidateNested()
  @Type(() => TratamentosWhereInput)
  @IsOptional()
  @Field(() => TratamentosWhereInput, {
    nullable: true,
  })
  none?: TratamentosWhereInput;
}
export { TratamentosListRelationFilter as TratamentosListRelationFilter };
