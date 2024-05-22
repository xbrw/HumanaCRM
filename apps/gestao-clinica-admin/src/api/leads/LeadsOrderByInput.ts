import { SortOrder } from "../../util/SortOrder";

export type LeadsOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
