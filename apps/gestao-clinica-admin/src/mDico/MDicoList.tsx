import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MDicoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Médicos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="contato" source="contato" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="crm" source="crm" />
        <TextField label="especialidade" source="especialidade" />
        <TextField label="ID" source="id" />
        <TextField label="nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
