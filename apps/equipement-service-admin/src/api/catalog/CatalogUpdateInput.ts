import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";

export type CatalogUpdateInput = {
  description?: string | null;
  prodcutName?: string | null;
  productType?: ProductTypeWhereUniqueInput | null;
  secondName?: string | null;
  sku?: string | null;
};
