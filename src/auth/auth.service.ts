import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
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

    async register(signUpDto: RegisterDto){
        const {firstName, lastName, phoneNumber, email, password} = signUpDto;

        const hashedPass = await bcrypt.hash(password, 10);

        const existingUser = await this.userModel.findOne({email});

        if (existingUser) {
            throw new ConflictException('E-mail already exists!');
        }

        
        const user = await this.userModel.create({
            firstName,
            lastName,
            email,
            password: hashedPass,
            phoneNumber
        })
        return {
            message: "Registration successful!",
        }
    }

    async login(loginDto: LoginDto): Promise<{token: string}>{
        const {email, password} = loginDto;

        const user = await this.userModel.findOne({email});

        if(!user) {
            throw new UnauthorizedException('Invalid e-mail!');
        }
        const authPass = await bcrypt.compare(password, user.password);

        if(!authPass) {
            throw new UnauthorizedException('Invalid credentials!');
        }

        const token = this.jwtService.sign({id: user._id});
        return {token};
    }
}