import {Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards} from '@nestjs/common';
import {AuthService} from './AuthService';
import {AuthGuard} from './AuthGuard';
import {AuthRequest} from './dto/AuthRequest';
import {AuthResponse} from './dto/AuthResponse';
import {MeResponse} from './dto/MeResponse';
import {ApiBearerAuth, ApiResponse} from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiResponse({status: HttpStatus.OK, type: AuthResponse})
    login(@Body() signInDto: AuthRequest): Promise<AuthResponse> {
        return this.authService.login(signInDto.username, signInDto.password);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    @ApiResponse({status: HttpStatus.CREATED, type: AuthResponse})
    register(@Body() registerDto: AuthRequest): Promise<AuthResponse> {
        return this.authService.register(registerDto.username, registerDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiResponse({status: HttpStatus.OK, type: MeResponse})
    getMe(@Request() req): Promise<MeResponse> {
        return this.authService.me(req.user.username);
    }
}
