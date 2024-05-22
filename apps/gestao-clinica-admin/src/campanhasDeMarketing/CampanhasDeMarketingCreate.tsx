import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CampanhasDeMarketingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Fim" source="fim" />
        <DateTimeInput label="Início" source="inCio" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
