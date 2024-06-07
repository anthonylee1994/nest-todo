import {ApiProperty} from '@nestjs/swagger';

export class UpdateTaskRequest {
    @ApiProperty()
    title: string;
    @ApiProperty()
    done: boolean;
}
