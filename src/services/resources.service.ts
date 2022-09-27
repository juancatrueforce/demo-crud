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

  async findOne(id: number): Promise<Resource> {
    return await this.resourceRepository.findOne({ where: { id: id } });
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

  async update(id: number, payload: any) {
    const resource = this.findOne(id);
    if (resource) {
      const responseUpdated = await this.resourceRepository.update(id, payload);
      if (responseUpdated && responseUpdated.affected === 1) {
        return true;
      }
    }
    return false;
  }

  async delete(id: number) {
    const resource = this.findOne(id);
    if (resource) {
      const responseUpdated = await this.resourceRepository.delete(id);
      if (responseUpdated && responseUpdated.affected === 1 ) {
        return true;
      } 
    }
    return false;
  }
}
