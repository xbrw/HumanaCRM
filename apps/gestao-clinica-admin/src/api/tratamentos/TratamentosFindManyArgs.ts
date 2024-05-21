import { TratamentosWhereInput } from "./TratamentosWhereInput";
import { TratamentosOrderByInput } from "./TratamentosOrderByInput";

export type TratamentosFindManyArgs = {
  where?: TratamentosWhereInput;
  orderBy?: Array<TratamentosOrderByInput>;
  skip?: number;
  take?: number;
};
