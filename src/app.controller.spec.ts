import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it("should return Welcome to the Spike's Juanca", () => {
      expect(appController.getHello()).toEqual({
        message: "Welcome to the Spike's Juanca",
        version: 'v0.0.1',
      });
    });
  });
});
