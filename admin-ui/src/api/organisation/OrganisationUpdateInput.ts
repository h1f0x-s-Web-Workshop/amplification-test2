import { CompanyUpdateManyWithoutOrganisationsInput } from "./CompanyUpdateManyWithoutOrganisationsInput";
import { UserUpdateManyWithoutOrganisationsInput } from "./UserUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  companies?: CompanyUpdateManyWithoutOrganisationsInput;
  name?: string | null;
  users?: UserUpdateManyWithoutOrganisationsInput;
};
