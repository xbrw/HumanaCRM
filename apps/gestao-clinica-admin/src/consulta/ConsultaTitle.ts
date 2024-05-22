import { Consulta as TConsulta } from "../api/consulta/Consulta";

export const CONSULTA_TITLE_FIELD = "id";

export const ConsultaTitle = (record: TConsulta): string => {
  return record.id?.toString() || String(record.id);
};
