import { Pacientes } from "../pacientes/Pacientes";

export type ProntuRiosEletrNicos = {
  createdAt: Date;
  dadosClNicos: string | null;
  dataDeAtualizaO: Date | null;
  id: string;
  paciente?: Pacientes | null;
  updatedAt: Date;
};
