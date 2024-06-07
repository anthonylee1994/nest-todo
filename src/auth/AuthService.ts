import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from '../user/UserService';
import {JwtService} from '@nestjs/jwt';
import {sha256} from 'js-sha256';
import {AuthResponse} from './dto/AuthResponse';
import {MeResponse} from './dto/MeResponse';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async login(username: string, pass: string): Promise<AuthResponse> {
        const user = await this.userService.findByUsername(username);
        const hashedPassword = sha256(pass);

        if (hashedPassword !== user?.password) {
            throw new UnauthorizedException();
        }
        const payload = {username: user.username, id: user.id};
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async register(username: string, pass: string): Promise<AuthResponse> {
        const user = await this.userService.createUser(username, pass);

        const payload = {username: user.username, id: user.id};
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async me(username: string): Promise<MeResponse> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {password, ...me} = await this.userService.findByUsername(username);
        return me;
    }
}
