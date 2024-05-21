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

export const ConsultaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
