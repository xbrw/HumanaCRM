import { Consultas } from "../consultas/Consultas";

export type Tratamentos = {
  consulta?: Consultas | null;
  createdAt: Date;
  descriO: string | null;
  id: string;
  nome: string | null;
  updatedAt: Date;
};
