import { Leads as TLeads } from "../api/leads/Leads";

export const LEADS_TITLE_FIELD = "nome";

export const LeadsTitle = (record: TLeads): string => {
  return record.nome?.toString() || String(record.id);
};
