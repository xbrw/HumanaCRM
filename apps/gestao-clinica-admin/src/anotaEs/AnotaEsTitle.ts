import { AnotaEs as TAnotaEs } from "../api/anotaEs/AnotaEs";

export const ANOTAES_TITLE_FIELD = "id";

export const AnotaEsTitle = (record: TAnotaEs): string => {
  return record.id?.toString() || String(record.id);
};
