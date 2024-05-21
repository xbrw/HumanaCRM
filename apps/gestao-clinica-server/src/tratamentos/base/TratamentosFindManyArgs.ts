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
import { TratamentosWhereInput } from "./TratamentosWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TratamentosOrderByInput } from "./TratamentosOrderByInput";

@ArgsType()
class TratamentosFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TratamentosWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TratamentosWhereInput, { nullable: true })
  @Type(() => TratamentosWhereInput)
  where?: TratamentosWhereInput;

  @ApiProperty({
    required: false,
    type: [TratamentosOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TratamentosOrderByInput], { nullable: true })
  @Type(() => TratamentosOrderByInput)
  orderBy?: Array<TratamentosOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TratamentosFindManyArgs as TratamentosFindManyArgs };