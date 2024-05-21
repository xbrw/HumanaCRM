import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DespesasList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DespesasItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Categoria" source="categoria" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data" source="data" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Valor" source="valor" />
      </Datagrid>
    </List>
  );
};
