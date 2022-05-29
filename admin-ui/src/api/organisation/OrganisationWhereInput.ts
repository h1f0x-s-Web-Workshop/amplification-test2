import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganisationWhereInput = {
  companies?: CompanyListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
