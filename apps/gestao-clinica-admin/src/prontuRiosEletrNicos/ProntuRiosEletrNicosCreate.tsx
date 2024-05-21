import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";

export const ProntuRiosEletrNicosCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Dados Clínicos" multiline source="dadosClNicos" />
        <DateTimeInput label="Data de Atualização" source="dataDeAtualizaO" />
        <ReferenceInput
          source="paciente.id"
          reference="Pacientes"
          label="Paciente"
        >
          <SelectInput optionText={PacientesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
