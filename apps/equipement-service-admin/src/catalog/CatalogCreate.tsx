import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";

export const CatalogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="prodcut Name" source="prodcutName" />
        <ReferenceInput
          source="productType.id"
          reference="ProductType"
          label="product type"
        >
          <SelectInput optionText={ProductTypeTitle} />
        </ReferenceInput>
        <TextInput label="SKU" source="sku" />
      </SimpleForm>
    </Create>
  );
};
