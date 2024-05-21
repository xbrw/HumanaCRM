import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONSULTAS_TITLE_FIELD } from "./ConsultasTitle";
import { PACIENTES_TITLE_FIELD } from "../pacientes/PacientesTitle";

export const ConsultasShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <TextField label="Diagnóstico" source="diagnStico" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Paciente"
          source="pacientes.id"
          reference="Pacientes"
        >
          <TextField source={PACIENTES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Tratamentos"
          target="consultaId"
          label="TratamentosItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Consulta"
              source="consultas.id"
              reference="Consultas"
            >
              <TextField source={CONSULTAS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Descrição" source="descriO" />
            <TextField label="ID" source="id" />
            <TextField label="Nome" source="nome" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
