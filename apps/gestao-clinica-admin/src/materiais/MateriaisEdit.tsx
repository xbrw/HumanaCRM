import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MateriaisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <NumberInput step={1} label="Quantidade" source="quantidade" />
      </SimpleForm>
    </Edit>
  );
};
