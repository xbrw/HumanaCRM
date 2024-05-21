import { Pacientes } from "../pacientes/Pacientes";
import { Salas } from "../salas/Salas";

export type Agendamento = {
  createdAt: Date;
  data: Date | null;
  id: string;
  paciente?: Pacientes | null;
  sala?: Salas | null;
  updatedAt: Date;
};
