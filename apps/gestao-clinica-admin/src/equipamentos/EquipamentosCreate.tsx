import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EquipamentosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
