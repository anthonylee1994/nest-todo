import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Task} from './Task';
import {CreateTaskRequest} from './dto/CreateTaskRequest';
import {UpdateTaskRequest} from './dto/UpdateTaskRequest';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ) {}

    async findAll(userId: number): Promise<Task[]> {
        return this.taskRepository.findBy({userId});
    }

    async create(userId: number, task: CreateTaskRequest): Promise<Task> {
        return this.taskRepository.save({...task, userId});
    }

    async update(userId: number, id: number, task: UpdateTaskRequest) {
        await this.taskRepository.update({userId, id}, task);
    }

    async delete(userId: number, taskId: number) {
        await this.taskRepository.delete({userId, id: taskId});
    }
}
