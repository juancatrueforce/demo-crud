import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from './../entities/resource.entity';

@Injectable()
export class ResourcesService {
  @InjectRepository(Resource)
  private readonly resourceRepository: Repository<Resource>;

  async findAll(): Promise<Resource[]> {
    return await this.resourceRepository.find();
  }

  async findOne(id: string): Promise<Resource> {
    return await this.resourceRepository.findOne({ where: { id } });
  }

  async create(payload: any): Promise<Resource> {
    const resource: Resource = new Resource();

    resource.type = payload.type;
    resource.name = payload.name;
    resource.description = payload.description;
    resource.tags = payload.tags;
    resource.size = payload.size;
    resource.path = payload.path;

    return await this.resourceRepository.save(resource);
  }

  async update(id: string, payload: any) {
    const resource = await this.findOne(id);
    if (resource) {
      const responseUpdated = await this.resourceRepository.update(id, payload);
      if (responseUpdated && responseUpdated.affected === 1) {
        return await this.findOne(id);
      }
    }
    return false;
  }

  async delete(id: string) {
    const resource = await this.findOne(id);
    if (resource) {
      const responseUpdated = await this.resourceRepository.delete(id);
      return resource;
    }
    return null;
  }
}
