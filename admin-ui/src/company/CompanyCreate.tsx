import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganisationTitle } from "../organisation/OrganisationTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Abbveriation" source="abbveriation" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organisation.id"
          reference="Organisation"
          label="Organisation"
        >
          <SelectInput optionText={OrganisationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
