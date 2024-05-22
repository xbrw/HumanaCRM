import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";

export const ConsultaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dataHora" source="dataHora" />
        <TextInput label="observacoes" multiline source="observacoes" />
        <ReferenceInput
          source="paciente.id"
          reference="Pacientes"
          label="paciente"
        >
          <SelectInput optionText={PacientesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
