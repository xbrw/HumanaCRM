import { Paciente as TPaciente } from "../api/paciente/Paciente";

export const PACIENTE_TITLE_FIELD = "contato";

export const PacienteTitle = (record: TPaciente): string => {
  return record.contato?.toString() || String(record.id);
};
