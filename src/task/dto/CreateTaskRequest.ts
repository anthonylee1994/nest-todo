import {ApiProperty} from '@nestjs/swagger';

export class CreateTaskRequest {
    @ApiProperty({required: true})
    title: string;
}
