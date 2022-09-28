import { Test, TestingModule } from '@nestjs/testing';
import { ResourcesService } from './resources.service';
import { AppModule } from './../app.module';

describe('SourcesService', () => {
  let service: ResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<ResourcesService>(ResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
