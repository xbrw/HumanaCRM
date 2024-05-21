import { Despesas as TDespesas } from "../api/despesas/Despesas";

export const DESPESAS_TITLE_FIELD = "categoria";

export const DespesasTitle = (record: TDespesas): string => {
  return record.categoria?.toString() || String(record.id);
};
