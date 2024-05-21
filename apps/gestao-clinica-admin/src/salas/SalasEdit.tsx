import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AgendamentoTitle } from "../agendamento/AgendamentoTitle";

export const SalasEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="agendamentos"
          reference="Agendamento"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgendamentoTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Capacidade" source="capacidade" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Edit>
  );
};
