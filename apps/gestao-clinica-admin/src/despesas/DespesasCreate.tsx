import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DespesasCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Categoria" source="categoria" />
        <DateTimeInput label="Data" source="data" />
        <TextInput label="Nome" source="nome" />
        <NumberInput label="Valor" source="valor" />
      </SimpleForm>
    </Create>
  );
};
