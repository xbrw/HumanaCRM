import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";

export type ConsultaWhereInput = {
  dataHora?: DateTimeNullableFilter;
  id?: StringFilter;
  observacoes?: StringNullableFilter;
  paciente?: PacientesWhereUniqueInput;
};
