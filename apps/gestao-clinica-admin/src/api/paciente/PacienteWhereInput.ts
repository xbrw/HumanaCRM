import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PacienteWhereInput = {
  contato?: StringNullableFilter;
  genero?: "Option1";
  id?: StringFilter;
  idade?: IntNullableFilter;
  nome?: StringNullableFilter;
};
