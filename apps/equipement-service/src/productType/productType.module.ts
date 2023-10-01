import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductTypeModuleBase } from "./base/productType.module.base";
import { ProductTypeService } from "./productType.service";
import { ProductTypeController } from "./productType.controller";
import { ProductTypeResolver } from "./productType.resolver";

@Module({
  imports: [ProductTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductTypeController],
  providers: [ProductTypeService, ProductTypeResolver],
  exports: [ProductTypeService],
})
export class ProductTypeModule {}
