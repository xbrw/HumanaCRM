import { ConsultaWhereInput } from "./ConsultaWhereInput";
import { ConsultaOrderByInput } from "./ConsultaOrderByInput";

export type ConsultaFindManyArgs = {
  where?: ConsultaWhereInput;
  orderBy?: Array<ConsultaOrderByInput>;
  skip?: number;
  take?: number;
};
