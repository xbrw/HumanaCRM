import { Salas as TSalas } from "../api/salas/Salas";

export const SALAS_TITLE_FIELD = "nome";

export const SalasTitle = (record: TSalas): string => {
  return record.nome?.toString() || String(record.id);
};
