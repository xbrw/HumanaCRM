import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadsWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  status?: StringNullableFilter;
};
