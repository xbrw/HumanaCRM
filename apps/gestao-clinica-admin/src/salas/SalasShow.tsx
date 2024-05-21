import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PACIENTES_TITLE_FIELD } from "../pacientes/PacientesTitle";
import { SALAS_TITLE_FIELD } from "./SalasTitle";

export const SalasShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Capacidade" source="capacidade" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Agendamento"
          target="salaId"
          label="Agendamentos"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Data" source="data" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Paciente"
              source="pacientes.id"
              reference="Pacientes"
            >
              <TextField source={PACIENTES_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Sala" source="salas.id" reference="Salas">
              <TextField source={SALAS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
