import { SalasWhereInput } from "./SalasWhereInput";
import { SalasOrderByInput } from "./SalasOrderByInput";

export type SalasFindManyArgs = {
  where?: SalasWhereInput;
  orderBy?: Array<SalasOrderByInput>;
  skip?: number;
  take?: number;
};
