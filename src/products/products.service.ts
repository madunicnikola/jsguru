import { HttpException, HttpStatus, Injectable, NotFoundException, Req, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProductDto } from "src/products/dto/product.dto";
import { Product } from "./schemas/product.schema";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

@Injectable()
export class ProductService{
    constructor(
        @InjectModel(Product.name)
        private products: mongoose.Model<Product>,
    ) {}
    async create(productDto: ProductDto, user: User): Promise<Product> {
        const product = await this.products.create({...productDto, user: user._id});
        return product;
    }
    async findAll(): Promise<Product[]>{
        const product = await this.products.find();
        return product;
    }
    async findById(id: string) {
        const validId = mongoose.isValidObjectId(id);
        if (!validId) {
          throw new NotFoundException('Product not found!');
        }

        const product = await this.products.findById(id);

        if (!product) {
            throw new NotFoundException('Product does not exist!');
        }

        return product
    }
    async delete(id: string, userId: string | {_id: string}): Promise<Product> {  
        try {
            const product = await this.findById(id);
    
            const userIdString = typeof userId === 'string' ? userId : userId._id.toString();

            if (product.user.toString() !== userIdString) {
                throw new HttpException('You are not authorized to delete this product!', HttpStatus.UNAUTHORIZED);
            }
    
            const deletedProduct = await this.products.findByIdAndDelete(id);
            console.log('Deleted product:', deletedProduct);
    
            if (!deletedProduct) {
                throw new NotFoundException('Product not found!');
            }
    
            return deletedProduct;
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    }
};