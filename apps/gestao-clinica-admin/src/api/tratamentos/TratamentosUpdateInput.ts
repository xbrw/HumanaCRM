import { ConsultasWhereUniqueInput } from "../consultas/ConsultasWhereUniqueInput";

export type TratamentosUpdateInput = {
  consulta?: ConsultasWhereUniqueInput | null;
  descriO?: string | null;
  nome?: string | null;
};
