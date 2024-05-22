import { DespesasWhereInput } from "./DespesasWhereInput";
import { DespesasOrderByInput } from "./DespesasOrderByInput";

export type DespesasFindManyArgs = {
  where?: DespesasWhereInput;
  orderBy?: Array<DespesasOrderByInput>;
  skip?: number;
  take?: number;
};
