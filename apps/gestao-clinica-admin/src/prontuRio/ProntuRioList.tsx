import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProntuRioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Prontuários"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="diagnostico" source="diagnostico" />
        <TextField label="ID" source="id" />
        <TextField label="medicamentos" source="medicamentos" />
        <TextField label="tratamento" source="tratamento" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
