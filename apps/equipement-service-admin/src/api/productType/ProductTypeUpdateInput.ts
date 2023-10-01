import { CatalogUpdateManyWithoutProductTypesInput } from "./CatalogUpdateManyWithoutProductTypesInput";

export type ProductTypeUpdateInput = {
  catalogs?: CatalogUpdateManyWithoutProductTypesInput;
  name?: "Normal" | "Special" | null;
};
