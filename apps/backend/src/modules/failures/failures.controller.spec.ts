import { Test, TestingModule } from '@nestjs/testing';
import { FailuresController } from './failures.controller';
import { FailuresService } from './failures.service';

describe('FailuresController', () => {
  let controller: FailuresController;
  let service: FailuresService;

  const mockFailuresService = {
    findAll: jest.fn().mockResolvedValue([]),
    findOne: jest
      .fn()
      .mockResolvedValue({ id: 1, description: 'Test Failure' }),
    create: jest.fn().mockResolvedValue({ id: 1, description: 'Created' }),
    update: jest.fn().mockResolvedValue({ id: 1, description: 'Updated' }),
    remove: jest.fn().mockResolvedValue({ id: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FailuresController],
      providers: [{ provide: FailuresService, useValue: mockFailuresService }],
    }).compile();

    controller = module.get<FailuresController>(FailuresController);
    service = module.get<FailuresService>(FailuresService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all failures', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a single failure by id', async () => {
    const id = '1';
    await controller.findOne(id);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('should remove a failure', async () => {
    const id = '1';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });
});
