import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductTypeServiceBase } from "./base/productType.service.base";

@Injectable()
export class ProductTypeService extends ProductTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
