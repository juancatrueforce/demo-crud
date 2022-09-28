import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../app.module';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './../services/resources.service';

describe('ResourcesController', () => {
  let resourceController: ResourcesController;
  let resourceService: ResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    resourceController = module.get<ResourcesController>(ResourcesController);
    resourceService = module.get<ResourcesService>(ResourcesService);
  });

  it('should be defined', () => {
    expect(resourceController).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of resources', async () => {
      const arrayResources = [
        {
          id: '6f88e0c4-7d3f-4116-b7dd-f3c935373e6e',
          type: 'VIDEO',
          name: 'video 1',
          description: 'This a great video',
          tags: ['soccer', 'futbol', 'eeuu'],
          size: '12 mb',
          path: '',
        },
      ];
      jest
        .spyOn(resourceService, 'findAll')
        .mockImplementation(async () => arrayResources);
      expect(await resourceController.findAll()).toBe(arrayResources);
    });
  });

  describe('findOne', () => {
    it('should return an object of user', async () => {
      const resource = {
        id: '6f88e0c4-7d3f-4116-b7dd-f3c935373e6e',
        type: 'VIDEO',
        name: 'video 1',
        description: 'This a great video',
        tags: ['soccer', 'futbol', 'eeuu'],
        size: '12 mb',
        path: '',
      }
      jest
        .spyOn(resourceService, 'findOne')
        .mockImplementation(async () => resource);
      expect(await resourceController.findOne(resource.id)).toBe(resource);
    });
  });

  describe('create', () => {
    it('should return an object of user', async () => {
      const resource = {
        id: '6f88e0c4-7d3f-4116-b7dd-f3c935373e6e',
        type: 'VIDEO',
        name: 'video 1',
        description: 'This a great video',
        tags: ['soccer', 'futbol', 'eeuu'],
        size: '12 mb',
        path: '',
      }
      jest.spyOn(resourceService, 'create').mockImplementation(async () => resource);
      expect(await resourceController.create(resource)).toBe(resource);
    });
  });

  describe('update', () => {
    it('should return an object of user updated', async () => {
      const resource = {
        id: '6f88e0c4-7d3f-4116-b7dd-f3c935373e6e',
        type: 'VIDEO',
        name: 'video 1',
        description: 'This a great video',
        tags: ['soccer', 'futbol', 'eeuu'],
        size: '12 mb',
        path: '',
      }
      jest.spyOn(resourceService, 'update').mockImplementation(async () => resource);
      expect(await resourceController.update(resource.id, resource)).toBe(resource);
    });
  });

  describe('delete', () => {
    it('should return an object of user deleted', async () => {
      const resource = {
        id: '6f88e0c4-7d3f-4116-b7dd-f3c935373e6e',
        type: 'VIDEO',
        name: 'video 1',
        description: 'This a great video',
        tags: ['soccer', 'futbol', 'eeuu'],
        size: '12 mb',
        path: '',
      }
      jest.spyOn(resourceService, 'delete').mockImplementation(async () => resource);
      expect(await resourceController.delete(resource.id)).toBe(resource);
    });
  });
});
