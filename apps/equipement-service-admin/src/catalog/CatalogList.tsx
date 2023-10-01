import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";

export const CatalogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Catalogs"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
