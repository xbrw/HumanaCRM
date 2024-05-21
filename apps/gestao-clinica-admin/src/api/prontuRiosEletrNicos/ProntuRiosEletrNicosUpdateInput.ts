import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";

export type ProntuRiosEletrNicosUpdateInput = {
  dadosClNicos?: string | null;
  dataDeAtualizaO?: Date | null;
  paciente?: PacientesWhereUniqueInput | null;
};
