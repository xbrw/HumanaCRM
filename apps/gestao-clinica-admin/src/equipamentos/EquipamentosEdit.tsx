import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EquipamentosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
