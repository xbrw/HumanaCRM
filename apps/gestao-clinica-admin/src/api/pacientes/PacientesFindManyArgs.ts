import { PacientesWhereInput } from "./PacientesWhereInput";
import { PacientesOrderByInput } from "./PacientesOrderByInput";

export type PacientesFindManyArgs = {
  where?: PacientesWhereInput;
  orderBy?: Array<PacientesOrderByInput>;
  skip?: number;
  take?: number;
};
