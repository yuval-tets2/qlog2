import { ProductType } from "../productType/ProductType";

export type Catalog = {
  createdAt: Date;
  description: string | null;
  id: string;
  prodcutName: string | null;
  productType?: ProductType | null;
  secondName: string | null;
  sku: string | null;
  updatedAt: Date;
};
