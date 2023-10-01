import { ProductTypeWhereInput } from "./ProductTypeWhereInput";
import { ProductTypeOrderByInput } from "./ProductTypeOrderByInput";

export type ProductTypeFindManyArgs = {
  where?: ProductTypeWhereInput;
  orderBy?: Array<ProductTypeOrderByInput>;
  skip?: number;
  take?: number;
};
