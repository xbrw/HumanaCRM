import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PACIENTES_TITLE_FIELD } from "./PacientesTitle";
import { SALAS_TITLE_FIELD } from "../salas/SalasTitle";

export const PacientesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Endereço" source="endereO" />
        <TextField label="Histórico Médico" source="histRicoMDico" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <TextField label="Telefone" source="telefone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Agendamento"
          target="pacienteId"
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
        <ReferenceManyField
          reference="Consulta"
          target="pacienteId"
          label="Consultas"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dataHora" source="dataHora" />
            <TextField label="ID" source="id" />
            <TextField label="observacoes" source="observacoes" />
            <ReferenceField
              label="paciente"
              source="pacientes.id"
              reference="Pacientes"
            >
              <TextField source={PACIENTES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Consultas"
          target="pacienteId"
          label="ConsultasItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProntuRiosEletrNicos"
          target="pacienteId"
          label="Prontuários EletrônicosItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Dados Clínicos" source="dadosClNicos" />
            <TextField label="Data de Atualização" source="dataDeAtualizaO" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Paciente"
              source="pacientes.id"
              reference="Pacientes"
            >
              <TextField source={PACIENTES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
