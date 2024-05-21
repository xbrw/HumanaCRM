import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";
import { TratamentosCreateNestedManyWithoutConsultasItemsInput } from "./TratamentosCreateNestedManyWithoutConsultasItemsInput";

export type ConsultasCreateInput = {
  data?: Date | null;
  diagnStico?: string | null;
  paciente?: PacientesWhereUniqueInput | null;
  tratamentosItems?: TratamentosCreateNestedManyWithoutConsultasItemsInput;
};
