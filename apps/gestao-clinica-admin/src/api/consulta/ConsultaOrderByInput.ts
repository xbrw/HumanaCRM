import { SortOrder } from "../../util/SortOrder";

export type ConsultaOrderByInput = {
  createdAt?: SortOrder;
  dataHora?: SortOrder;
  id?: SortOrder;
  observacoes?: SortOrder;
  pacienteId?: SortOrder;
  updatedAt?: SortOrder;
};
