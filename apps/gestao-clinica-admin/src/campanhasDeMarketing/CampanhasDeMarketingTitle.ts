import { CampanhasDeMarketing as TCampanhasDeMarketing } from "../api/campanhasDeMarketing/CampanhasDeMarketing";

export const CAMPANHASDEMARKETING_TITLE_FIELD = "nome";

export const CampanhasDeMarketingTitle = (
  record: TCampanhasDeMarketing
): string => {
  return record.nome?.toString() || String(record.id);
};
