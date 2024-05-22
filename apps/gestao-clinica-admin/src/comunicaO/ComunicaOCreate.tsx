import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ComunicaOCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Data de Envio" source="dataDeEnvio" />
        <TextInput label="Destinatário" source="destinatRio" />
        <TextInput label="Mensagem" multiline source="mensagem" />
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Create>
  );
};
