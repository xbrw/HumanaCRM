import { Consultas as TConsultas } from "../api/consultas/Consultas";

export const CONSULTAS_TITLE_FIELD = "id";

export const ConsultasTitle = (record: TConsultas): string => {
  return record.id?.toString() || String(record.id);
};
