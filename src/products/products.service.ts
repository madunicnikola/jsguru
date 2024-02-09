import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProductDto } from "src/products/dto/product.dto";
import { Product } from "./schemas/product.schema";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";


@Injectable()
export class ProductService{
    constructor(
        @InjectModel(Product.name)
        private products: mongoose.Model<Product>
    ) {}
    async create(product: ProductDto): Promise<Product> {
        const res = await this.products.create(product);
        return res;
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
    async delete(id: string): Promise<Product>{
        return await this.products.findByIdAndDelete(id);
    };
};