import { ProductType as TProductType } from "../api/productType/ProductType";

export const PRODUCTTYPE_TITLE_FIELD = "name";

export const ProductTypeTitle = (record: TProductType): string => {
  return record.name?.toString() || String(record.id);
};
