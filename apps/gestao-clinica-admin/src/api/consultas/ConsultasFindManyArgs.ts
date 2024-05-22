import { ConsultasWhereInput } from "./ConsultasWhereInput";
import { ConsultasOrderByInput } from "./ConsultasOrderByInput";

export type ConsultasFindManyArgs = {
  where?: ConsultasWhereInput;
  orderBy?: Array<ConsultasOrderByInput>;
  skip?: number;
  take?: number;
};
