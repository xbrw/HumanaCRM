import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";
import { SalasWhereUniqueInput } from "../salas/SalasWhereUniqueInput";

export type AgendamentoWhereInput = {
  data?: DateTimeNullableFilter;
  id?: StringFilter;
  paciente?: PacientesWhereUniqueInput;
  sala?: SalasWhereUniqueInput;
};
