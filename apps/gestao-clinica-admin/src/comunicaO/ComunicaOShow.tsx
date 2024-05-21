import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ComunicaOShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data de Envio" source="dataDeEnvio" />
        <TextField label="Destinatário" source="destinatRio" />
        <TextField label="ID" source="id" />
        <TextField label="Mensagem" source="mensagem" />
        <TextField label="Tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
