import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganisationTitle } from "../organisation/OrganisationTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
