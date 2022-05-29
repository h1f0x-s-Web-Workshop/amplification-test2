import { Organisation } from "../organisation/Organisation";

export type Company = {
  abbveriation: string | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  organisation?: Organisation | null;
  updatedAt: Date;
};
