import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({}, {message: "Enter valid e-mail: "})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    readonly password: string;
}