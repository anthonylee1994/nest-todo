import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/UserModule';
import {AuthService} from './auth/AuthService';
import {AuthModule} from './auth/AuthModule';
import {TaskModule} from './task/TaskModule';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'todo',
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
        }),
        UserModule,
        AuthModule,
        TaskModule,
    ],
    providers: [AuthService],
})
export class AppModule {}
