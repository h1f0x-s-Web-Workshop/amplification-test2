import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  abbveriation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  organisationId?: SortOrder;
  updatedAt?: SortOrder;
};
