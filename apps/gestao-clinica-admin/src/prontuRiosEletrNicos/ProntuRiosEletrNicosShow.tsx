import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PACIENTES_TITLE_FIELD } from "../pacientes/PacientesTitle";

export const ProntuRiosEletrNicosShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
