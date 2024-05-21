import { AgendamentoCreateNestedManyWithoutSalasItemsInput } from "./AgendamentoCreateNestedManyWithoutSalasItemsInput";

export type SalasCreateInput = {
  agendamentos?: AgendamentoCreateNestedManyWithoutSalasItemsInput;
  capacidade?: number | null;
  nome?: string | null;
};
