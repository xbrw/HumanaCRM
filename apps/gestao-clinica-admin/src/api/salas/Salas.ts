import { Agendamento } from "../agendamento/Agendamento";

export type Salas = {
  agendamentos?: Array<Agendamento>;
  capacidade: number | null;
  createdAt: Date;
  id: string;
  nome: string | null;
  updatedAt: Date;
};
