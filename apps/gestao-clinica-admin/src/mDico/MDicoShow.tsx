import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MDicoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contato" source="contato" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="crm" source="crm" />
        <TextField label="especialidade" source="especialidade" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
