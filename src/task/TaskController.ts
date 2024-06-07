import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import {TaskService} from './TaskService';
import {AuthGuard} from '../auth/AuthGuard';
import {CreateTaskRequest} from './dto/CreateTaskRequest';
import {UpdateTaskRequest} from './dto/UpdateTaskRequest';
import {ApiBearerAuth, ApiResponse} from '@nestjs/swagger';
import {Task} from './Task';

@Controller('tasks')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @HttpCode(HttpStatus.OK)
    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @ApiResponse({status: HttpStatus.OK, type: [Task]})
    async findAll(@Request() req: any) {
        return this.taskService.findAll(req.user.id);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @ApiResponse({status: HttpStatus.CREATED, type: Task})
    async create(@Request() req: any, @Body() task: CreateTaskRequest) {
        return this.taskService.create(req.user.id, {title: task.title});
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Put(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    async update(@Request() req: any, @Param('id') id: number, @Body() task: UpdateTaskRequest) {
        return this.taskService.update(req.user.id, id, task);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    async delete(@Request() req: any, @Param('id') id: number) {
        return this.taskService.delete(req.user.id, id);
    }
}
