import { PacientesWhereUniqueInput } from "../pacientes/PacientesWhereUniqueInput";
import { SalasWhereUniqueInput } from "../salas/SalasWhereUniqueInput";

export type AgendamentoCreateInput = {
  data?: Date | null;
  paciente?: PacientesWhereUniqueInput | null;
  sala?: SalasWhereUniqueInput | null;
};
