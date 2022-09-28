import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../app.module';
import { UsersController } from './users.controller';
import { UsersService } from './../services/users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const arrayUsers = [
        {
          id: 'ad18fea3-bb6c-4b8d-84d8-4dcfa98baddf',
          email: 'ramirorios@gmail.com',
          password: 'demo123',
          firstname: 'Ramiro',
          lastname: 'Rios',
        },
      ];
      jest
        .spyOn(userService, 'findAll')
        .mockImplementation(async () => arrayUsers);
      expect(await userController.findAll()).toBe(arrayUsers);
    });
  });

  describe('findOne', () => {
    it('should return an object of user', async () => {
      const user = {
        id: 'ad18fea3-bb6c-4b8d-84d8-4dcfa98baddf',
        email: 'ramirorios@gmail.com',
        password: 'demo123',
        firstname: 'Ramiro',
        lastname: 'Rios',
      };
      jest.spyOn(userService, 'findOne').mockImplementation(async () => user);
      expect(await userController.findOne(user.id)).toBe(user);
    });
  });

  describe('create', () => {
    it('should return an object of user', async () => {
      const user = {
        id: 'ad18fea3-bb6c-4b8d-84d8-4dcfa98baddf',
        email: 'ramirorios@gmail.com',
        password: 'demo123',
        firstname: 'Ramiro',
        lastname: 'Rios',
      };
      jest.spyOn(userService, 'create').mockImplementation(async () => user);
      expect(await userController.create(user)).toBe(user);
    });
  });

  describe('update', () => {
    it('should return an object of user updated', async () => {
      const user = {
        id: 'ad18fea3-bb6c-4b8d-84d8-4dcfa98baddf',
        email: 'ramirorios@gmail.com',
        password: 'demo123',
        firstname: 'Ramiro',
        lastname: 'Rios',
      };
      jest.spyOn(userService, 'update').mockImplementation(async () => user);
      expect(await userController.update(user.id, user)).toBe(user);
    });
  });

  describe('delete', () => {
    it('should return an object of user deleted', async () => {
      const user = {
        id: 'ad18fea3-bb6c-4b8d-84d8-4dcfa98baddf',
        email: 'ramirorios@gmail.com',
        password: 'demo123',
        firstname: 'Ramiro',
        lastname: 'Rios',
      };
      jest.spyOn(userService, 'delete').mockImplementation(async () => user);
      expect(await userController.delete(user.id)).toBe(user);
    });
  });
});
