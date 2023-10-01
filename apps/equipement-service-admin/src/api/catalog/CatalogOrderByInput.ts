import { SortOrder } from "../../util/SortOrder";

export type CatalogOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  prodcutName?: SortOrder;
  productTypeId?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
