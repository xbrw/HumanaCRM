import { Equipamentos as TEquipamentos } from "../api/equipamentos/Equipamentos";

export const EQUIPAMENTOS_TITLE_FIELD = "nome";

export const EquipamentosTitle = (record: TEquipamentos): string => {
  return record.nome?.toString() || String(record.id);
};
