import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Resource } from './resource.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  email: string;

  @Column({ type: 'varchar', length: 500 })
  password: string;

  @Column({ type: 'varchar', length: 500 })
  firstname: string;

  @Column({ type: 'varchar', length: 500 })
  lastname: string;

  @OneToMany(() => Resource, (resource) => resource.user)
  resources: Resource[]
}