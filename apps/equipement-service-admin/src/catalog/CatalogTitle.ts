import { Catalog as TCatalog } from "../api/catalog/Catalog";

export const CATALOG_TITLE_FIELD = "prodcutName";

export const CatalogTitle = (record: TCatalog): string => {
  return record.prodcutName?.toString() || String(record.id);
};
