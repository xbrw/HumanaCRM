import { SortOrder } from "../../util/SortOrder";

export type PacienteOrderByInput = {
  contato?: SortOrder;
  createdAt?: SortOrder;
  genero?: SortOrder;
  id?: SortOrder;
  idade?: SortOrder;
  nome?: SortOrder;
  updatedAt?: SortOrder;
};
