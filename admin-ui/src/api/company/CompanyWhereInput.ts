import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type CompanyWhereInput = {
  abbveriation?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  organisation?: OrganisationWhereUniqueInput;
};
