import { Catalog } from "../catalog/Catalog";

export type ProductType = {
  catalogs?: Array<Catalog>;
  createdAt: Date;
  id: string;
  name?: "Normal" | "Special" | null;
  updatedAt: Date;
};
