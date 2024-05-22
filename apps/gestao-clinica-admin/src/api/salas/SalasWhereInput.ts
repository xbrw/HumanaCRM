import { AgendamentoListRelationFilter } from "../agendamento/AgendamentoListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SalasWhereInput = {
  agendamentos?: AgendamentoListRelationFilter;
  capacidade?: IntNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
};
