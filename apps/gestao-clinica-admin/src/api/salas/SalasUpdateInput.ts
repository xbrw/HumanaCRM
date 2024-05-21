import { AgendamentoUpdateManyWithoutSalasItemsInput } from "./AgendamentoUpdateManyWithoutSalasItemsInput";

export type SalasUpdateInput = {
  agendamentos?: AgendamentoUpdateManyWithoutSalasItemsInput;
  capacidade?: number | null;
  nome?: string | null;
};
