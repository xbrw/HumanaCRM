import { Pacientes as TPacientes } from "../api/pacientes/Pacientes";

export const PACIENTES_TITLE_FIELD = "nome";

export const PacientesTitle = (record: TPacientes): string => {
  return record.nome?.toString() || String(record.id);
};
