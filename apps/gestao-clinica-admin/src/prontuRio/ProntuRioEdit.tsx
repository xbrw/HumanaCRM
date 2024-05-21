import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ProntuRioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="data" source="data" />
        <TextInput label="diagnostico" multiline source="diagnostico" />
        <TextInput label="medicamentos" multiline source="medicamentos" />
        <TextInput label="tratamento" multiline source="tratamento" />
      </SimpleForm>
    </Edit>
  );
};
