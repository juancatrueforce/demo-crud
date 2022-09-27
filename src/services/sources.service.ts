import { Injectable } from '@nestjs/common';
import { Source } from './../entities/source.entity';

@Injectable()
export class SourcesService {
  private counterId = 1;

  private sources: Source[] = [
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
    return this.sources;
  }

  findOne(id: number) {
    console.log(this.sources);
    return this.sources.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newSource = {
      id: this.counterId,
      ...payload,
    };
    this.sources.push(newSource);
    return newSource;
  }

  update(id: number, payload: any) {
    const source = this.findOne(id);
    if (source) {
      const index = this.sources.findIndex((obj) => obj.id === id);
      const sourceUpdated = {
        ...source,
        ...payload,
      };
      this.sources[index] = sourceUpdated;
      return sourceUpdated;
    }
    return null;
  }

  delete(id: number) {
    const index = this.sources.findIndex((obj) => obj.id === id);
    this.sources.splice(index, 1);
    return id;
  }
}
