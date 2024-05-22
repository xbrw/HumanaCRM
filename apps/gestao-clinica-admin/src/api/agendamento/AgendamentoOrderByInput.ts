import { SortOrder } from "../../util/SortOrder";

export type AgendamentoOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  pacienteId?: SortOrder;
  salaId?: SortOrder;
  updatedAt?: SortOrder;
};
