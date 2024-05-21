import { LeadsWhereInput } from "./LeadsWhereInput";
import { LeadsOrderByInput } from "./LeadsOrderByInput";

export type LeadsFindManyArgs = {
  where?: LeadsWhereInput;
  orderBy?: Array<LeadsOrderByInput>;
  skip?: number;
  take?: number;
};
