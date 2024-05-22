import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";

export const ConsultaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
