import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";

export type CompanyCreateInput = {
  abbveriation?: string | null;
  location?: string | null;
  name?: string | null;
  organisation?: OrganisationWhereUniqueInput | null;
};
