import { AnotaEsWhereInput } from "./AnotaEsWhereInput";
import { AnotaEsOrderByInput } from "./AnotaEsOrderByInput";

export type AnotaEsFindManyArgs = {
  where?: AnotaEsWhereInput;
  orderBy?: Array<AnotaEsOrderByInput>;
  skip?: number;
  take?: number;
};
