import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';
import { UserDto } from 'src/dtos/user.dto';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(payload: UserDto): Promise<User> {
    const user: User = new User();

    user.email = payload.email;
    user.firstname = payload.firstname;
    user.lastname = payload.lastname;
    user.password = payload.password;

    return await this.userRepository.save(user);
  }

  async update(id: string, payload: UserDto) {
    let user = await this.findOne(id);
    if (user) {
      const responseUpdated = await this.userRepository.update(id, payload);
      return await this.findOne(id);
    }
    return null;
  }

  async delete(id: string) {
    const user = await this.findOne(id);
    if (user) {
      const responseUpdated = await this.userRepository.delete(id);
      return user;
    }
    return null;
  }
}
