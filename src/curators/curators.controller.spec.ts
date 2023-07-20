import { Test, TestingModule } from '@nestjs/testing';
import { CuratorsController } from './curators.controller';
import { CuratorsService } from './curators.service';

describe('CuratorsController', () => {
  let controller: CuratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuratorsController],
      providers: [CuratorsService],
    }).compile();

    controller = module.get<CuratorsController>(CuratorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
