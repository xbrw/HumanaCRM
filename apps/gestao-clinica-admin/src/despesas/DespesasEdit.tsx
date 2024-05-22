import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DespesasEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Categoria" source="categoria" />
        <DateTimeInput label="Data" source="data" />
        <TextInput label="Nome" source="nome" />
        <NumberInput label="Valor" source="valor" />
      </SimpleForm>
    </Edit>
  );
};
