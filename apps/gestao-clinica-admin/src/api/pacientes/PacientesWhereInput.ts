import { AgendamentoListRelationFilter } from "../agendamento/AgendamentoListRelationFilter";
import { ConsultaListRelationFilter } from "../consulta/ConsultaListRelationFilter";
import { ConsultasListRelationFilter } from "../consultas/ConsultasListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProntuRiosEletrNicosListRelationFilter } from "../prontuRiosEletrNicos/ProntuRiosEletrNicosListRelationFilter";

export type PacientesWhereInput = {
  agendamentos?: AgendamentoListRelationFilter;
  consultas?: ConsultaListRelationFilter;
  consultasItems?: ConsultasListRelationFilter;
  email?: StringNullableFilter;
  endereO?: StringNullableFilter;
  histRicoMDico?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  prontuRiosEletrNicosItems?: ProntuRiosEletrNicosListRelationFilter;
  telefone?: StringNullableFilter;
};
