import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  organisation?: OrganisationWhereUniqueInput;
  username?: StringFilter;
};
