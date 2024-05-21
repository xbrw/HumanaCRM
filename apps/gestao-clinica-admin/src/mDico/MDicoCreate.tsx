import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MDicoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contato" source="contato" />
        <TextInput label="crm" source="crm" />
        <TextInput label="especialidade" source="especialidade" />
        <TextInput label="nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
