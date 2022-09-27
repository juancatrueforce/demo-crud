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
    const user = this.findOne(id);
    if (user) {
      const responseUpdated = await this.userRepository.update(id, payload);
      return responseUpdated && responseUpdated.affected === 1;
    }
    return false;
  }

  async delete(id: string) {
    const user = this.findOne(id);
    if (user) {
      const responseUpdated = await this.userRepository.delete(id);
      return responseUpdated && responseUpdated.affected === 1;
    }
    return false;
  }
}
