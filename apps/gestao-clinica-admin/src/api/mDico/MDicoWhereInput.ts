import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MDicoWhereInput = {
  contato?: StringNullableFilter;
  crm?: StringNullableFilter;
  especialidade?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
};
