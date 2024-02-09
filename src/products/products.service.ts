import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProductDto } from "src/products/dto/product.dto";
import { Product } from "./schemas/product.schema";
import mongoose, { Types } from "mongoose";

@Injectable()
export class ProductService{
    constructor(
        @InjectModel(Product.name)
        private products: mongoose.Model<Product>
    ) {}
    async create(productDto: ProductDto, userId: string): Promise<Product> {
        const userObjectId = new Types.ObjectId(userId);
        const product = new this.products({
            ...productDto,
            author: userObjectId
        });
        return product.save();
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
    async delete(id: string, userId: string){
        const product = await this.products.findById(id);
        const userObjectId = new Types.ObjectId(userId);

        if(!product.author.equals(userObjectId)){
            throw new UnauthorizedException('You are not authorized to delete products that you did not make!')
        }
        
        return await this.products.findByIdAndDelete(id);
    };
};