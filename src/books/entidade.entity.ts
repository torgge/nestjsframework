import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Entidade {

  @PrimaryColumn()
  ncodienti: number;

  @Column()
  cnomeenti: string;

}
