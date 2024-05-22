import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ProntuRioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="data" source="data" />
        <TextInput label="diagnostico" multiline source="diagnostico" />
        <TextInput label="medicamentos" multiline source="medicamentos" />
        <TextInput label="tratamento" multiline source="tratamento" />
      </SimpleForm>
    </Create>
  );
};
