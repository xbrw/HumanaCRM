import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const PacienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contato" source="contato" />
        <SelectInput
          source="genero"
          label="genero"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="idade" source="idade" />
        <TextInput label="nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
