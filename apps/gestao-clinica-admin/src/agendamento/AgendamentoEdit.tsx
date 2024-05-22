import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PacientesTitle } from "../pacientes/PacientesTitle";
import { SalasTitle } from "../salas/SalasTitle";

export const AgendamentoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
