import { ConsultasWhereUniqueInput } from "../consultas/ConsultasWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TratamentosWhereInput = {
  consulta?: ConsultasWhereUniqueInput;
  descriO?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
};
