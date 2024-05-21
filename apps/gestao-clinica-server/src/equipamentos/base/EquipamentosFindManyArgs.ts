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
import { EquipamentosWhereInput } from "./EquipamentosWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EquipamentosOrderByInput } from "./EquipamentosOrderByInput";

@ArgsType()
class EquipamentosFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EquipamentosWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EquipamentosWhereInput, { nullable: true })
  @Type(() => EquipamentosWhereInput)
  where?: EquipamentosWhereInput;

  @ApiProperty({
    required: false,
    type: [EquipamentosOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EquipamentosOrderByInput], { nullable: true })
  @Type(() => EquipamentosOrderByInput)
  orderBy?: Array<EquipamentosOrderByInput>;

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

export { EquipamentosFindManyArgs as EquipamentosFindManyArgs };