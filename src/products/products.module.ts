import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { ProductService } from './products.service';

@Module({
  imports: [MongooseModule.forFeature([{name: "Product", schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
