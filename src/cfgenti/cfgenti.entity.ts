import {Entity, Column, PrimaryColumn} from 'typeorm';

@Entity()
export class Cfgenti {
  @PrimaryColumn()
  ncodienti: number;

  @Column()
  cnomeenti: string;
}
