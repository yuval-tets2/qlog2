import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";

export type CatalogWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  prodcutName?: StringNullableFilter;
  productType?: ProductTypeWhereUniqueInput;
  sku?: StringNullableFilter;
};
