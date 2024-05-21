import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PacientesTitle } from "../pacientes/PacientesTitle";
import { TratamentosTitle } from "../tratamentos/TratamentosTitle";

export const ConsultasCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
