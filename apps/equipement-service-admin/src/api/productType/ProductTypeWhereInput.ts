import { CatalogListRelationFilter } from "../catalog/CatalogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductTypeWhereInput = {
  catalogs?: CatalogListRelationFilter;
  id?: StringFilter;
  name?: "Normal" | "Special";
};
