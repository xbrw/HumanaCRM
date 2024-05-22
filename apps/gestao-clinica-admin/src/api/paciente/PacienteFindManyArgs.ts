import { PacienteWhereInput } from "./PacienteWhereInput";
import { PacienteOrderByInput } from "./PacienteOrderByInput";

export type PacienteFindManyArgs = {
  where?: PacienteWhereInput;
  orderBy?: Array<PacienteOrderByInput>;
  skip?: number;
  take?: number;
};
