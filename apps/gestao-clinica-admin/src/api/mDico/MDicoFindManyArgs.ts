import { MDicoWhereInput } from "./MDicoWhereInput";
import { MDicoOrderByInput } from "./MDicoOrderByInput";

export type MDicoFindManyArgs = {
  where?: MDicoWhereInput;
  orderBy?: Array<MDicoOrderByInput>;
  skip?: number;
  take?: number;
};
