import { SortOrder } from "../../util/SortOrder";

export type PacientesOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  endereO?: SortOrder;
  histRicoMDico?: SortOrder;
  id?: SortOrder;
  nome?: SortOrder;
  telefone?: SortOrder;
  updatedAt?: SortOrder;
};
