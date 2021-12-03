import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  patronymic: string;
}
