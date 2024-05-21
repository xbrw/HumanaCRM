import { EquipamentosWhereInput } from "./EquipamentosWhereInput";
import { EquipamentosOrderByInput } from "./EquipamentosOrderByInput";

export type EquipamentosFindManyArgs = {
  where?: EquipamentosWhereInput;
  orderBy?: Array<EquipamentosOrderByInput>;
  skip?: number;
  take?: number;
};
