import { Test, TestingModule } from '@nestjs/testing';
import { FailuresService } from './failures.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { FailureType, Severity } from 'src/database/generated/prisma/enums';

describe('FailuresService', () => {
  let service: FailuresService;
  let prisma: PrismaService;

  const mockPrismaService = {
    failureLog: {
      create: jest.fn().mockImplementation(({ data }) => Promise.resolve({ id: 1, ...data })),
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue(null),
      update: jest.fn().mockResolvedValue({}),
      delete: jest.fn().mockResolvedValue({}),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FailuresService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<FailuresService>(FailuresService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('checkGpsAndAltitude', () => {
    it('should create a NETWORK CRITICAL failure when GPS is lost (0,0)', async () => {
      await service.checkGpsAndAltitude(0, 0, 100, 50, 123);
      expect(mockPrismaService.failureLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          type: FailureType.NETWORK,
          severity: Severity.CRITICAL,
          description: expect.stringContaining('GPS Lost'),
          uavDataId: 123,
        }),
      });
    });

    it('should create a HARDWARE CRITICAL failure when terrain proximity is detected', async () => {
      await service.checkGpsAndAltitude(50.45, 30.52, 1, 45, 123);
      expect(mockPrismaService.failureLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          type: FailureType.HARDWARE,
          severity: Severity.CRITICAL,
          description: expect.stringContaining('Terrain Proximity'),
        }),
      });
    });
  });

  describe('checkFlightDynamics', () => {
    it('should detect a Hard Landing CRITICAL', async () => {
      await service.checkFlightDynamics(-5, 1, 60, 0, 0, 123);
      expect(mockPrismaService.failureLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          type: FailureType.HARDWARE,
          severity: Severity.CRITICAL,
          description: expect.stringContaining('Hard Landing CRITICAL'),
        }),
      });
    });

    it('should detect a STALL CRITICAL', async () => {
      await service.checkFlightDynamics(0, 100, 40, 0, 0, 123);
      expect(mockPrismaService.failureLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          type: FailureType.OTHER,
          severity: Severity.CRITICAL,
          description: expect.stringContaining('STALL CRITICAL'),
        }),
      });
    });
  });

  describe('checkHardwareStatus', () => {
    it('should detect GEAR UNSAFE at low altitude', async () => {
      await service.checkHardwareStatus(0, 5, 80, 40, 123);
      expect(mockPrismaService.failureLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          type: FailureType.HARDWARE,
          severity: Severity.CRITICAL,
          description: expect.stringContaining('GEAR UNSAFE'),
        }),
      });
    });

    it('should detect Low Battery WARNING', async () => {
      await service.checkHardwareStatus(1, 100, 25, 40, 123);
      expect(mockPrismaService.failureLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          severity: Severity.WARNING,
          description: expect.stringContaining('Low Battery WARNING'),
        }),
      });
    });
  });
});
