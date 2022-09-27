import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async create(payload: any): Promise<User> {
    const user: User = new User();

    user.email = payload.email;
    user.firstname = payload.firstname;
    user.lastname = payload.lastname;
    user.password = payload.password;

    return await this.userRepository.save(user);
  }

  async update(id: number, payload: any) {
    const user = this.findOne(id);
    if (user) {
      const responseUpdated = await this.userRepository.update(id, payload);
      if (responseUpdated && responseUpdated.affected === 1) {
        return true;
      }
    }
    return false;
  }

  async delete(id: number) {
    const user = this.findOne(id);
    if (user) {
      const responseUpdated = await this.userRepository.delete(id);
      if (responseUpdated && responseUpdated.affected === 1 ) {
        return true;
      } 
    }
    return false;
  }
}
