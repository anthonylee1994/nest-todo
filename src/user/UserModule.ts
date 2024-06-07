import {Module} from '@nestjs/common';
import {UserService} from './UserService';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './User';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
