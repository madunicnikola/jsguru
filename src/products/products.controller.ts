import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from 'src/products/dto/product.dto';
import { Product } from './schemas/product.schema';
import { AuthGuard } from '@nestjs/passport';
import { PassportModule } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}
    @Post()
    @UseGuards(AuthGuard())
    async createProduct(@Body() product: ProductDto): Promise<Product> {
        return this.productService.create(product);
    }
    @Get()
    @UseGuards(AuthGuard())
    async findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }
    @Get(':id')
    @UseGuards(AuthGuard())
    async findbyId(@Param('id') id: string): Promise<Product> {
        const product =  await this.productService.findById(id);
        return product;
    }
    @Delete(':id')
    @UseGuards(AuthGuard())
    deleteProduct(@Param('id') id: string){
        return this.productService.delete(id);
    }
}
