import { SortOrder } from "../../util/SortOrder";

export type ConsultasOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  diagnStico?: SortOrder;
  id?: SortOrder;
  pacienteId?: SortOrder;
  updatedAt?: SortOrder;
};
