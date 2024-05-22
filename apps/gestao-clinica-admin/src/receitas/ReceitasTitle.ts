import { Receitas as TReceitas } from "../api/receitas/Receitas";

export const RECEITAS_TITLE_FIELD = "id";

export const ReceitasTitle = (record: TReceitas): string => {
  return record.id?.toString() || String(record.id);
};
