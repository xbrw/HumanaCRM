import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MateriaisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
        <NumberInput step={1} label="Quantidade" source="quantidade" />
      </SimpleForm>
    </Create>
  );
};
