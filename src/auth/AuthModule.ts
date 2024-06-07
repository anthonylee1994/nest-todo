import {Module} from '@nestjs/common';
import {AuthService} from './AuthService';
import {UserModule} from '../user/UserModule';
import {JwtModule} from '@nestjs/jwt';
import {AuthController} from './AuthController';
import {jwtConstants} from './jwtConstants';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
