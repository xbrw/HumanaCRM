import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AgendamentoTitle } from "../agendamento/AgendamentoTitle";
import { ConsultaTitle } from "../consulta/ConsultaTitle";
import { ConsultasTitle } from "../consultas/ConsultasTitle";
import { ProntuRiosEletrNicosTitle } from "../prontuRiosEletrNicos/ProntuRiosEletrNicosTitle";

export const PacientesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="agendamentos"
          reference="Agendamento"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AgendamentoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="consultas"
          reference="Consulta"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConsultaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="consultasItems"
          reference="Consultas"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConsultasTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Endereço" multiline source="endereO" />
        <TextInput label="Histórico Médico" multiline source="histRicoMDico" />
        <TextInput label="Nome" source="nome" />
        <ReferenceArrayInput
          source="prontuRiosEletrNicosItems"
          reference="ProntuRiosEletrNicos"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProntuRiosEletrNicosTitle} />
        </ReferenceArrayInput>
        <TextInput label="Telefone" source="telefone" />
      </SimpleForm>
    </Create>
  );
};
