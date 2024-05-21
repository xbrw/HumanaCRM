import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";

export type ProntuRiosEletrNicosWhereInput = {
  dadosClNicos?: StringNullableFilter;
  dataDeAtualizaO?: DateTimeNullableFilter;
  id?: StringFilter;
  paciente?: PacientesWhereUniqueInput;
};
