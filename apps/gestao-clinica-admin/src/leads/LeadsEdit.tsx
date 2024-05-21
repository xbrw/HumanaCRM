import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LeadsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
