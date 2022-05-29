import { Company } from "../company/Company";
import { User } from "../user/User";

export type Organisation = {
  companies?: Array<Company>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
