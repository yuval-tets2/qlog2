import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCTTYPE_TITLE_FIELD } from "./ProductTypeTitle";

export const ProductTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Catalog"
          target="productTypeId"
          label="Catalogs"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="prodcut Name" source="prodcutName" />
            <ReferenceField
              label="product type"
              source="producttype.id"
              reference="ProductType"
            >
              <TextField source={PRODUCTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="second name" source="secondName" />
            <TextField label="SKU" source="sku" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
