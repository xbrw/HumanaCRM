import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DespesasShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Categoria" source="categoria" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Valor" source="valor" />
      </SimpleShowLayout>
    </Show>
  );
};
