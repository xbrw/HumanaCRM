/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ConsultasWhereUniqueInput } from "../../consultas/base/ConsultasWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ConsultasCreateNestedManyWithoutPacientesItemsInput {
  @Field(() => [ConsultasWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConsultasWhereUniqueInput],
  })
  connect?: Array<ConsultasWhereUniqueInput>;
}

export { ConsultasCreateNestedManyWithoutPacientesItemsInput as ConsultasCreateNestedManyWithoutPacientesItemsInput };