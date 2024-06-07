import {sha256} from 'js-sha256';
import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './User';
import {Repository} from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOneBy({username});
    }

    async createUser(username: string, password: string): Promise<User> {
        const user = await this.userRepository.findOneBy({username});

        if (user) {
            throw new BadRequestException('User already exists');
        }

        return this.userRepository.save({username, password: sha256(password)});
    }
}
