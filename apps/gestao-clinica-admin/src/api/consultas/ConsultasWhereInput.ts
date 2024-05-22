import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";
import { TratamentosListRelationFilter } from "../tratamentos/TratamentosListRelationFilter";

export type ConsultasWhereInput = {
  data?: DateTimeNullableFilter;
  diagnStico?: StringNullableFilter;
  id?: StringFilter;
  paciente?: PacientesWhereUniqueInput;
  tratamentosItems?: TratamentosListRelationFilter;
};
