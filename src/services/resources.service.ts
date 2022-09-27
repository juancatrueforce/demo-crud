import { Injectable } from '@nestjs/common';
import { Resource } from './../entities/resource.entity';

@Injectable()
export class ResourcesService {
  private counterId = 1;

  private resources: Resource[] = [
    {
      id: 1,
      type: 'VIDEO',
      name: 'video 1',
      description: 'Great video',
      tags: ['soccer', 'younger', 'eeuu'],
      size: '10 Mb',
      path: ''
    },
  ];

  findAll() {
    return this.resources;
  }

  findOne(id: number) {
    return this.resources.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newResource = {
      id: this.counterId,
      ...payload,
    };
    this.resources.push(newResource);
    return newResource;
  }

  update(id: number, payload: any) {
    const resource = this.findOne(id);
    if (resource) {
      const index = this.resources.findIndex((obj) => obj.id === id);
      const resourceUpdated = {
        ...resource,
        ...payload,
      };
      this.resources[index] = resourceUpdated;
      return resourceUpdated;
    }
    return null;
  }

  delete(id: number) {
    const index = this.resources.findIndex((obj) => obj.id === id);
    this.resources.splice(index, 1);
    return id;
  }
}
