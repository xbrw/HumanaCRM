import { Agendamento as TAgendamento } from "../api/agendamento/Agendamento";

export const AGENDAMENTO_TITLE_FIELD = "id";

export const AgendamentoTitle = (record: TAgendamento): string => {
  return record.id?.toString() || String(record.id);
};
