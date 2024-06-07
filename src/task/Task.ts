import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class Task {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({nullable: false})
    title: string;

    @ApiProperty()
    @Column({nullable: false, default: false})
    done: boolean;

    @ApiProperty()
    @Column({nullable: false})
    userId: number;

    @ApiProperty()
    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty()
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}
