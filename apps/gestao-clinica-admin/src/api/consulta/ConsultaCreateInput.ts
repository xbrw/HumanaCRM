import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";

export type ConsultaCreateInput = {
  dataHora?: Date | null;
  observacoes?: string | null;
  paciente?: PacientesWhereUniqueInput | null;
};
