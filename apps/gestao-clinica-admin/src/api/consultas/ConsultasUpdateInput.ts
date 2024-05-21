import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";
import { TratamentosUpdateManyWithoutConsultasItemsInput } from "./TratamentosUpdateManyWithoutConsultasItemsInput";

export type ConsultasUpdateInput = {
  data?: Date | null;
  diagnStico?: string | null;
  paciente?: PacientesWhereUniqueInput | null;
  tratamentosItems?: TratamentosUpdateManyWithoutConsultasItemsInput;
};
