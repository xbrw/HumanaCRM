import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";
import { SalasTitle } from "../salas/SalasTitle";

export const AgendamentoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Data" source="data" />
        <ReferenceInput
          source="paciente.id"
          reference="Pacientes"
          label="Paciente"
        >
          <SelectInput optionText={PacientesTitle} />
        </ReferenceInput>
        <ReferenceInput source="sala.id" reference="Salas" label="Sala">
          <SelectInput optionText={SalasTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
