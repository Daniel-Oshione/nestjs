import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `we are, in year ${new Date().getFullYear()} and month is ${new Date().getMonth()}th. The date is also ${new Date().getDate()}.`;
  }
}
