import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PacienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contato" source="contato" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="genero" source="genero" />
        <TextField label="ID" source="id" />
        <TextField label="idade" source="idade" />
        <TextField label="nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
