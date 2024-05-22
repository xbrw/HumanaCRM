import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";

export type ProntuRiosEletrNicosCreateInput = {
  dadosClNicos?: string | null;
  dataDeAtualizaO?: Date | null;
  paciente?: PacientesWhereUniqueInput | null;
};
