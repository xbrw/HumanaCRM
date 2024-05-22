import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";
import { TratamentosTitle } from "../tratamentos/TratamentosTitle";

export const ConsultasEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Data" source="data" />
        <TextInput label="Diagnóstico" multiline source="diagnStico" />
        <ReferenceInput
          source="paciente.id"
          reference="Pacientes"
          label="Paciente"
        >
          <SelectInput optionText={PacientesTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tratamentosItems"
          reference="Tratamentos"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TratamentosTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
