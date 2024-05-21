import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CampanhasDeMarketingWhereInput = {
  fim?: DateTimeNullableFilter;
  id?: StringFilter;
  inCio?: DateTimeNullableFilter;
  nome?: StringNullableFilter;
};
