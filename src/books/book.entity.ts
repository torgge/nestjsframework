import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Book {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    // created_time: Date;
}
