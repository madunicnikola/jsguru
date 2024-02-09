import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: 'First Name'})
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: 'Last Name'})
    readonly lastName: string;
 
    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, description: 'Phone Number'})
    readonly phoneNumber: string;

    @IsNotEmpty()
    @IsEmail({}, {message: "Enter valid e-mail: "})
    @ApiProperty({type: String, description: 'E-mail'})
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @ApiProperty({type: String, description: 'Password'})
    readonly password: string;
}