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

export const ProntuRiosEletrNicosList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Prontuários EletrônicosItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
