import { Test, TestingModule } from '@nestjs/testing';
import { WmsController } from './wms.controller';

describe('WmsController', () => {
  let controller: WmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WmsController],
    }).compile();

    controller = module.get<WmsController>(WmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
