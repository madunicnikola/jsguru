import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model} from "mongoose";
import { User } from "./schemas/user.schema";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService{
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async register(signUpDto: RegisterDto): Promise<{token: string}>{
        const {firstName, lastName, phoneNumber, email, password} = signUpDto;

        const hashedPass = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            privilegedUser: true,
            firstName,
            lastName,
            email,
            password: hashedPass,
            phoneNumber
        })
        const token = this.jwtService.sign({
            id: user._id,
        });
        return {token};
    }

    async login(loginDto: LoginDto): Promise<{token: string}>{
        const {email, password} = loginDto;

        const user = await this.userModel.findOne({email});

        if(!user) {
            throw new UnauthorizedException('\nInvalid e-mail!\n');
        }
        const authPass = await bcrypt.compare(password, user.password);

        if(!authPass) {
            throw new UnauthorizedException('\nInvalid credentials!\n');
        }

        const token = this.jwtService.sign({id: user._id});
        return {token};
    }
}