import { ComunicaO as TComunicaO } from "../api/comunicaO/ComunicaO";

export const COMUNICAO_TITLE_FIELD = "destinatRio";

export const ComunicaOTitle = (record: TComunicaO): string => {
  return record.destinatRio?.toString() || String(record.id);
};
