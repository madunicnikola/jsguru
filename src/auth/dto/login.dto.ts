import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({}, {message: "Enter valid e-mail: "})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}