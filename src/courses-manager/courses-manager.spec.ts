import { Test, TestingModule } from '@nestjs/testing';
import { CoursesManager } from './courses-manager';

describe('CoursesManager', () => {
  let provider: CoursesManager;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesManager],
    }).compile();

    provider = module.get<CoursesManager>(CoursesManager);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
