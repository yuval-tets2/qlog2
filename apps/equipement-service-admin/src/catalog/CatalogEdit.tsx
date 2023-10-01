import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";

export const CatalogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
