import { MDico as TMDico } from "../api/mDico/MDico";

export const MDICO_TITLE_FIELD = "contato";

export const MDicoTitle = (record: TMDico): string => {
  return record.contato?.toString() || String(record.id);
};
