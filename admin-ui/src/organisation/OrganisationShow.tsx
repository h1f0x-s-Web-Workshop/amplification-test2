import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORGANISATION_TITLE_FIELD } from "./OrganisationTitle";

export const OrganisationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Company"
          target="OrganisationId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <TextField label="Abbveriation" source="abbveriation" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="location" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Organisation"
              source="organisation.id"
              reference="Organisation"
            >
              <TextField source={ORGANISATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="User"
          target="OrganisationId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="Organisation"
              source="organisation.id"
              reference="Organisation"
            >
              <TextField source={ORGANISATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
