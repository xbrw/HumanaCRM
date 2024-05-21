import { Materiais as TMateriais } from "../api/materiais/Materiais";

export const MATERIAIS_TITLE_FIELD = "nome";

export const MateriaisTitle = (record: TMateriais): string => {
  return record.nome?.toString() || String(record.id);
};
