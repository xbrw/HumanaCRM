import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const CampanhasDeMarketingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Fim" source="fim" />
        <DateTimeInput label="Início" source="inCio" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Edit>
  );
};
