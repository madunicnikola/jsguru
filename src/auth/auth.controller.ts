import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";

@ApiTags('Authentication')
@Controller('user')
export class AuthController {
    constructor(private authService: AuthService){

    }
    @Post('/register')
    @ApiCreatedResponse({description: "User Registration Form"})
    @ApiBody({type: RegisterDto})
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }
    @Post('/login')
    @ApiOkResponse({description: "User Login Form"})
    @ApiBody({type: LoginDto})
    @ApiUnauthorizedResponse({description: "Unauthorized Access!"})
    login(@Body() loginDto: LoginDto): Promise<{token: string}> {
        return this.authService.login(loginDto);
    }
}
