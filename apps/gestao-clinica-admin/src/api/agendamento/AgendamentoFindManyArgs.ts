import { AgendamentoWhereInput } from "./AgendamentoWhereInput";
import { AgendamentoOrderByInput } from "./AgendamentoOrderByInput";

export type AgendamentoFindManyArgs = {
  where?: AgendamentoWhereInput;
  orderBy?: Array<AgendamentoOrderByInput>;
  skip?: number;
  take?: number;
};
