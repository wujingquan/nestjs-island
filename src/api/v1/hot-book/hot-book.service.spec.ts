import { Test, TestingModule } from '@nestjs/testing';
import { HotBookService } from './hot-book.service';

describe('HotBookService', () => {
  let service: HotBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotBookService],
    }).compile();

    service = module.get<HotBookService>(HotBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
