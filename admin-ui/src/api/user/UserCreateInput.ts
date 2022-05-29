import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
  password: string;
  roles: Array<string>;
  username: string;
};
