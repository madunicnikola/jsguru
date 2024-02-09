import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductDto } from 'src/products/dto/product.dto';
import { Product } from './schemas/product.schema';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Product Deployment')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductService) {}
    @Post()
    @UseGuards(AuthGuard())
    @ApiCreatedResponse({description: "Create your product!"})
    @ApiBearerAuth()
    async createProduct(@Body() product: ProductDto): Promise<Product> {
        return this.productService.create(product);
    }
    @Get()
    @UseGuards(AuthGuard())
    @ApiCreatedResponse({description: "Find all products!"})
    @ApiBearerAuth()
    async findAll(): Promise<Product[]>{
        return this.productService.findAll();
    }
    @Get(':id')
    @UseGuards(AuthGuard())
    @ApiCreatedResponse({description: "Find product by ID!"})
    @ApiBearerAuth()
    async findbyId(@Param('id') id: string): Promise<Product> {
        return this.productService.findById(id);
    }
    @Delete(':id')
    @UseGuards(AuthGuard())
    @ApiCreatedResponse({description: "Delete your product!"})
    @ApiBearerAuth()
    async deleteProduct(@Param('id') id: string){
        return this.productService.delete(id);
    }
}
