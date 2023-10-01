import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { CatalogTitle } from "../catalog/CatalogTitle";

export const ProductTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="catalogs"
          reference="Catalog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CatalogTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="name"
          label="name"
          choices={[
            { label: "normal", value: "Normal" },
            { label: "special", value: "Special" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
