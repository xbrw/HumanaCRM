import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ComunicaOWhereInput = {
  dataDeEnvio?: DateTimeNullableFilter;
  destinatRio?: StringNullableFilter;
  id?: StringFilter;
  mensagem?: StringNullableFilter;
  tipo?: StringNullableFilter;
};
