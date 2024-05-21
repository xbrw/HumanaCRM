import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ComunicaOList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comunicaçãos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Data de Envio" source="dataDeEnvio" />
        <TextField label="Destinatário" source="destinatRio" />
        <TextField label="ID" source="id" />
        <TextField label="Mensagem" source="mensagem" />
        <TextField label="Tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
