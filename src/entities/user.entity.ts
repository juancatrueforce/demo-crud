import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  email: string;

  @Column({ type: 'varchar', length: 500 })
  password: string;

  @Column({ type: 'varchar', length: 500 })
  firstname: string;

  @Column({ type: 'varchar', length: 500 })
  lastname: string;
}