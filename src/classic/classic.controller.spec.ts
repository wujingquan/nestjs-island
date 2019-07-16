import { Test, TestingModule } from '@nestjs/testing';
import { ClassicController } from './classic.controller';

describe('Classic Controller', () => {
  let controller: ClassicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassicController],
    }).compile();

    controller = module.get<ClassicController>(ClassicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
