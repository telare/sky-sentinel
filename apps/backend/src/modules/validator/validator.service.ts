import { Injectable } from '@nestjs/common';

interface UAVdata {
  latitude: string;
  longitude: string;
  altitude: string;
  verticalSpeed: string;
  airspeed: string;
  pitch: string;
  roll: string;
  gear_status: string;
  battery_level: string;
  temperature: string;
  rssi: string;
  latency: string;
  timestamp: string;
}

interface UAVdataPacket {
  data: UAVdata;
  checksum: string;
}

@Injectable()
export class ValidatorService {
  private createDeterministicString(uavdata: UAVdata): string {
    const sortedKeys = Object.keys(uavdata).sort();

    return sortedKeys.map((key) => `${key}:${uavdata[key]}`).join('|');
  }

  validate(packet: UAVdataPacket): boolean {
    try {
      const { data, checksum } = packet;

      const payloadString = this.createDeterministicString(data);

      let calculatedChecksum = 0;
      for (let i = 0; i < payloadString.length; i++) {
        calculatedChecksum ^= payloadString.charCodeAt(i);
      }

      const hexResult = calculatedChecksum
        .toString(16)
        .toUpperCase()
        .padStart(2, '0');

      const isValid = hexResult === checksum.toUpperCase();

      if (!isValid) {
        console.error(
          `[Validation] Checksum mismatch! Expected: ${hexResult}, Received: ${checksum}`,
        );
      }

      return isValid;
    } catch (error) {
      console.error('[Validation] Error during data validation:', error);
      return false;
    }
  }
}
