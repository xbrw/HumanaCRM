import { ConsultasWhereUniqueInput } from "../consultas/ConsultasWhereUniqueInput";

export type TratamentosCreateInput = {
  consulta?: ConsultasWhereUniqueInput | null;
  descriO?: string | null;
  nome?: string | null;
};
