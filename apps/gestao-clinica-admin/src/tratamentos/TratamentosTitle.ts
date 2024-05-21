import { Tratamentos as TTratamentos } from "../api/tratamentos/Tratamentos";

export const TRATAMENTOS_TITLE_FIELD = "nome";

export const TratamentosTitle = (record: TTratamentos): string => {
  return record.nome?.toString() || String(record.id);
};
