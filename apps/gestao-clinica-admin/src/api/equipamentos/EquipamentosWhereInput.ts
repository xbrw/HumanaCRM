import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EquipamentosWhereInput = {
  id?: StringFilter;
  nome?: StringNullableFilter;
  status?: StringNullableFilter;
};
