import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
 
    @IsNotEmpty()
    @IsString()
    readonly phoneNumber: string;

    @IsNotEmpty()
    @IsEmail({}, {message: "Enter valid e-mail: "})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    readonly password: string;
}