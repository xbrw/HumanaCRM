import { SortOrder } from "../../util/SortOrder";

export type MateriaisOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  quantidade?: SortOrder;
  updatedAt?: SortOrder;
};
