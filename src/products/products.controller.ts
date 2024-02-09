import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from 'src/products/dto/product.dto';
import { Product } from './schemas/product.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}
    @Post()
    @UseGuards(AuthGuard())
    async createProduct(@Body() product: ProductDto, userId: string): Promise<Product> {
        return this.productService.create(product, userId);
    }
    @Get()
    @UseGuards(AuthGuard())
    async findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }
    @Get(':id')
    @UseGuards(AuthGuard())
    async findbyId(@Param('id') id: string): Promise<Product> {
        return this.productService.findById(id);
    }
    @Delete(':id')
    @UseGuards(AuthGuard())
    deleteProduct(@Param('id') id: string, userId: string){
        const deletedProduct = this.productService.delete(id, userId);
        if (deletedProduct){
            throw new MessageEvent("Successfuly deleted!");
        }
    }
}
