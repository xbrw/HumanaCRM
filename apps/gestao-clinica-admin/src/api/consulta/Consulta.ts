import { Pacientes } from "../pacientes/Pacientes";

export type Consulta = {
  createdAt: Date;
  dataHora: Date | null;
  id: string;
  observacoes: string | null;
  paciente?: Pacientes | null;
  updatedAt: Date;
};
