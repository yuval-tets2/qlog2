/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateProductTypeArgs } from "./CreateProductTypeArgs";
import { UpdateProductTypeArgs } from "./UpdateProductTypeArgs";
import { DeleteProductTypeArgs } from "./DeleteProductTypeArgs";
import { ProductTypeCountArgs } from "./ProductTypeCountArgs";
import { ProductTypeFindManyArgs } from "./ProductTypeFindManyArgs";
import { ProductTypeFindUniqueArgs } from "./ProductTypeFindUniqueArgs";
import { ProductType } from "./ProductType";
import { CatalogFindManyArgs } from "../../catalog/base/CatalogFindManyArgs";
import { Catalog } from "../../catalog/base/Catalog";
import { ProductTypeService } from "../productType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductType)
export class ProductTypeResolverBase {
  constructor(
    protected readonly service: ProductTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "read",
    possession: "any",
  })
  async _productTypesMeta(
    @graphql.Args() args: ProductTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProductType])
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "read",
    possession: "any",
  })
  async productTypes(
    @graphql.Args() args: ProductTypeFindManyArgs
  ): Promise<ProductType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProductType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "read",
    possession: "own",
  })
  async productType(
    @graphql.Args() args: ProductTypeFindUniqueArgs
  ): Promise<ProductType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductType)
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "create",
    possession: "any",
  })
  async createProductType(
    @graphql.Args() args: CreateProductTypeArgs
  ): Promise<ProductType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProductType)
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "update",
    possession: "any",
  })
  async updateProductType(
    @graphql.Args() args: UpdateProductTypeArgs
  ): Promise<ProductType | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProductType)
  @nestAccessControl.UseRoles({
    resource: "ProductType",
    action: "delete",
    possession: "any",
  })
  async deleteProductType(
    @graphql.Args() args: DeleteProductTypeArgs
  ): Promise<ProductType | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Catalog], { name: "catalogs" })
  @nestAccessControl.UseRoles({
    resource: "Catalog",
    action: "read",
    possession: "any",
  })
  async resolveFieldCatalogs(
    @graphql.Parent() parent: ProductType,
    @graphql.Args() args: CatalogFindManyArgs
  ): Promise<Catalog[]> {
    const results = await this.service.findCatalogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}