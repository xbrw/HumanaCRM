import { ProntuRiosEletrNicos as TProntuRiosEletrNicos } from "../api/prontuRiosEletrNicos/ProntuRiosEletrNicos";

export const PRONTURIOSELETRNICOS_TITLE_FIELD = "id";

export const ProntuRiosEletrNicosTitle = (
  record: TProntuRiosEletrNicos
): string => {
  return record.id?.toString() || String(record.id);
};
