import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/schemas/user.schema";

export class ProductDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: 'name'})
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: 'description'})
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({type: Number, description: 'price'})
    readonly price: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({type: Number, description: 'quantity'})
    readonly quantity: number;

    @IsEmpty({message: "Forbidden command!"})
    readonly user: User;
}