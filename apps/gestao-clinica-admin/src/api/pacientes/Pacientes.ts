import { Agendamento } from "../agendamento/Agendamento";
import { Consulta } from "../consulta/Consulta";
import { Consultas } from "../consultas/Consultas";
import { ProntuRiosEletrNicos } from "../prontuRiosEletrNicos/ProntuRiosEletrNicos";

export type Pacientes = {
  agendamentos?: Array<Agendamento>;
  consultas?: Array<Consulta>;
  consultasItems?: Array<Consultas>;
  createdAt: Date;
  email: string | null;
  endereO: string | null;
  histRicoMDico: string | null;
  id: string;
  nome: string | null;
  prontuRiosEletrNicosItems?: Array<ProntuRiosEletrNicos>;
  telefone: string | null;
  updatedAt: Date;
};
