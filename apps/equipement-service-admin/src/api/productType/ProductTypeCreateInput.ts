import { CatalogCreateNestedManyWithoutProductTypesInput } from "./CatalogCreateNestedManyWithoutProductTypesInput";

export type ProductTypeCreateInput = {
  catalogs?: CatalogCreateNestedManyWithoutProductTypesInput;
  name?: "Normal" | "Special" | null;
};
