import { CompanyCreateNestedManyWithoutOrganisationsInput } from "./CompanyCreateNestedManyWithoutOrganisationsInput";
import { UserCreateNestedManyWithoutOrganisationsInput } from "./UserCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  companies?: CompanyCreateNestedManyWithoutOrganisationsInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutOrganisationsInput;
};
