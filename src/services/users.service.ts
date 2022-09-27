import { Injectable } from '@nestjs/common';
import { User } from './../entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;

  private users: User[] = [
    {
      id: 1,
      email: 'juancitopinto@gmail.com',
      password: '',
      firstname: 'Juan',
      lastname: 'Pinto'
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: any) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((obj) => obj.id === id);
      const userUpdated = {
        ...user,
        ...payload,
      };
      this.users[index] = userUpdated;
      return userUpdated;
    }
    return null;
  }

  delete(id: number) {
    const index = this.users.findIndex((obj) => obj.id === id);
    this.users.splice(index, 1);
    return id;
  }
}
