import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsultasTitle } from "../consultas/ConsultasTitle";

export const TratamentosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="consulta.id"
          reference="Consultas"
          label="Consulta"
        >
          <SelectInput optionText={ConsultasTitle} />
        </ReferenceInput>
        <TextInput label="Descrição" multiline source="descriO" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
