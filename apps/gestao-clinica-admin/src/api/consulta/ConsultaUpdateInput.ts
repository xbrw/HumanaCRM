import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";

export type ConsultaUpdateInput = {
  dataHora?: Date | null;
  observacoes?: string | null;
  paciente?: PacientesWhereUniqueInput | null;
};
