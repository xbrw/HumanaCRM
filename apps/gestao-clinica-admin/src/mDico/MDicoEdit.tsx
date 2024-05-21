import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MDicoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contato" source="contato" />
        <TextInput label="crm" source="crm" />
        <TextInput label="especialidade" source="especialidade" />
        <TextInput label="nome" source="nome" />
      </SimpleForm>
    </Edit>
  );
};
