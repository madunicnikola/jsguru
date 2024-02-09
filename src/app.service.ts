import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '\nAPI u funkciji!\n';
  }
}
