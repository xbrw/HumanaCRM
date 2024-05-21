import { SortOrder } from "../../util/SortOrder";

export type DespesasOrderByInput = {
  categoria?: SortOrder;
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  updatedAt?: SortOrder;
  valor?: SortOrder;
};
