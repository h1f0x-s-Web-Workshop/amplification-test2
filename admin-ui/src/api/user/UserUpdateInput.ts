import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
