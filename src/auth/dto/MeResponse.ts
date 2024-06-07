import {ApiProperty} from '@nestjs/swagger';

export class MeResponse {
    @ApiProperty()
    id: number;
    @ApiProperty()
    username: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
