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
import { AgendamentoCreateNestedManyWithoutSalasItemsInput } from "./AgendamentoCreateNestedManyWithoutSalasItemsInput";
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SalasCreateInput {
  @ApiProperty({
    required: false,
    type: () => AgendamentoCreateNestedManyWithoutSalasItemsInput,
  })
  @ValidateNested()
  @Type(() => AgendamentoCreateNestedManyWithoutSalasItemsInput)
  @IsOptional()
  @Field(() => AgendamentoCreateNestedManyWithoutSalasItemsInput, {
    nullable: true,
  })
  agendamentos?: AgendamentoCreateNestedManyWithoutSalasItemsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacidade?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nome?: string | null;
}

export { SalasCreateInput as SalasCreateInput };