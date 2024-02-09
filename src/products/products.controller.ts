import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from 'src/products/dto/product.dto';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}
    @Post()
    async createProduct(@Body() product: ProductDto): Promise<Product> {
        return this.productService.create(product);
    }
    @Get()
    async findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }
    @Get(':id')
    async findbyId(@Param('id') id: string): Promise<Product> {
        const product =  await this.productService.findById(id);
        return product;
    }
    @Delete(':id')
    deleteProduct(@Param('id') id: string){
        return this.productService.delete(id);
    }
}
