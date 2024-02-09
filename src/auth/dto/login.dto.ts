import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @IsNotEmpty()
    @ApiProperty({type: String, description: 'E-mail'})
    @IsEmail({}, {message: "Enter valid e-mail: "})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: 'Password'})
    readonly password: string;
}