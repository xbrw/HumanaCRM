import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PACIENTES_TITLE_FIELD } from "../pacientes/PacientesTitle";

export const ConsultaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Consultas"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
