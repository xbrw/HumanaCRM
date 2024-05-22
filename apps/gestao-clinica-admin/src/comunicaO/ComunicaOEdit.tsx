import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ComunicaOEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Data de Envio" source="dataDeEnvio" />
        <TextInput label="Destinatário" source="destinatRio" />
        <TextInput label="Mensagem" multiline source="mensagem" />
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Edit>
  );
};
