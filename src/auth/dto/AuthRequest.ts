import {ApiProperty} from '@nestjs/swagger';

export class AuthRequest {
    @ApiProperty({required: true})
    username: string;
    @ApiProperty({required: true})
    password: string;
}
