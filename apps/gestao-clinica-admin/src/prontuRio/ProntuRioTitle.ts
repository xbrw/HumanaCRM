import { ProntuRio as TProntuRio } from "../api/prontuRio/ProntuRio";

export const PRONTURIO_TITLE_FIELD = "id";

export const ProntuRioTitle = (record: TProntuRio): string => {
  return record.id?.toString() || String(record.id);
};
