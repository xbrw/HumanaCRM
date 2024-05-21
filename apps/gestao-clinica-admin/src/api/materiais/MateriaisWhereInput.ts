import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MateriaisWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
  quantidade?: IntNullableFilter;
};
