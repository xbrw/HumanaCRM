import { AgendamentoCreateNestedManyWithoutPacientesItemsInput } from "./AgendamentoCreateNestedManyWithoutPacientesItemsInput";
import { ConsultaCreateNestedManyWithoutPacientesItemsInput } from "./ConsultaCreateNestedManyWithoutPacientesItemsInput";
import { ConsultasCreateNestedManyWithoutPacientesItemsInput } from "./ConsultasCreateNestedManyWithoutPacientesItemsInput";
import { ProntuRiosEletrNicosCreateNestedManyWithoutPacientesItemsInput } from "./ProntuRiosEletrNicosCreateNestedManyWithoutPacientesItemsInput";

export type PacientesCreateInput = {
  agendamentos?: AgendamentoCreateNestedManyWithoutPacientesItemsInput;
  consultas?: ConsultaCreateNestedManyWithoutPacientesItemsInput;
  consultasItems?: ConsultasCreateNestedManyWithoutPacientesItemsInput;
  email?: string | null;
  endereO?: string | null;
  histRicoMDico?: string | null;
  nome?: string | null;
  prontuRiosEletrNicosItems?: ProntuRiosEletrNicosCreateNestedManyWithoutPacientesItemsInput;
  telefone?: string | null;
};
