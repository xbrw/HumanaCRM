import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsultasTitle } from "../consultas/ConsultasTitle";

export const TratamentosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
