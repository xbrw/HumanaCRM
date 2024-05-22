import { Pacientes } from "../pacientes/Pacientes";
import { Tratamentos } from "../tratamentos/Tratamentos";

export type Consultas = {
  createdAt: Date;
  data: Date | null;
  diagnStico: string | null;
  id: string;
  paciente?: Pacientes | null;
  tratamentosItems?: Array<Tratamentos>;
  updatedAt: Date;
};
