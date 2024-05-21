import { AgendamentoUpdateManyWithoutPacientesItemsInput } from "./AgendamentoUpdateManyWithoutPacientesItemsInput";
import { ConsultaUpdateManyWithoutPacientesItemsInput } from "./ConsultaUpdateManyWithoutPacientesItemsInput";
import { ConsultasUpdateManyWithoutPacientesItemsInput } from "./ConsultasUpdateManyWithoutPacientesItemsInput";
import { ProntuRiosEletrNicosUpdateManyWithoutPacientesItemsInput } from "./ProntuRiosEletrNicosUpdateManyWithoutPacientesItemsInput";

export type PacientesUpdateInput = {
  agendamentos?: AgendamentoUpdateManyWithoutPacientesItemsInput;
  consultas?: ConsultaUpdateManyWithoutPacientesItemsInput;
  consultasItems?: ConsultasUpdateManyWithoutPacientesItemsInput;
  email?: string | null;
  endereO?: string | null;
  histRicoMDico?: string | null;
  nome?: string | null;
  prontuRiosEletrNicosItems?: ProntuRiosEletrNicosUpdateManyWithoutPacientesItemsInput;
  telefone?: string | null;
};
