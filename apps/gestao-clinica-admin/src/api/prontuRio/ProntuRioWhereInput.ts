import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProntuRioWhereInput = {
  data?: DateTimeNullableFilter;
  diagnostico?: StringNullableFilter;
  id?: StringFilter;
  medicamentos?: StringNullableFilter;
  tratamento?: StringNullableFilter;
};
