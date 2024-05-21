import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LeadsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
