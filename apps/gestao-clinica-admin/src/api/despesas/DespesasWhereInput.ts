import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DespesasWhereInput = {
  categoria?: StringNullableFilter;
  data?: DateTimeNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  valor?: FloatNullableFilter;
};
