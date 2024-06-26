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
import { MateriaisWhereInput } from "./MateriaisWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MateriaisListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MateriaisWhereInput,
  })
  @ValidateNested()
  @Type(() => MateriaisWhereInput)
  @IsOptional()
  @Field(() => MateriaisWhereInput, {
    nullable: true,
  })
  every?: MateriaisWhereInput;

  @ApiProperty({
    required: false,
    type: () => MateriaisWhereInput,
  })
  @ValidateNested()
  @Type(() => MateriaisWhereInput)
  @IsOptional()
  @Field(() => MateriaisWhereInput, {
    nullable: true,
  })
  some?: MateriaisWhereInput;

  @ApiProperty({
    required: false,
    type: () => MateriaisWhereInput,
  })
  @ValidateNested()
  @Type(() => MateriaisWhereInput)
  @IsOptional()
  @Field(() => MateriaisWhereInput, {
    nullable: true,
  })
  none?: MateriaisWhereInput;
}
export { MateriaisListRelationFilter as MateriaisListRelationFilter };
