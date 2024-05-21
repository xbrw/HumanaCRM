import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const PacienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
