import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";

export const ProntuRiosEletrNicosEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
