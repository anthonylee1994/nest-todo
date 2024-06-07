import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Task} from './Task';
import {TaskController} from './TaskController';
import {TaskService} from './TaskService';

@Module({
    providers: [TaskService],
    controllers: [TaskController],
    imports: [TypeOrmModule.forFeature([Task])],
})
export class TaskModule {}
