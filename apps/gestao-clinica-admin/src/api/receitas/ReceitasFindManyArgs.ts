import { ReceitasWhereInput } from "./ReceitasWhereInput";
import { ReceitasOrderByInput } from "./ReceitasOrderByInput";

export type ReceitasFindManyArgs = {
  where?: ReceitasWhereInput;
  orderBy?: Array<ReceitasOrderByInput>;
  skip?: number;
  take?: number;
};
