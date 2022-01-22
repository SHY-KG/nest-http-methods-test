import { Injectable } from '@nestjs/common';
import { OutputDto } from './dtos/output.dto';

@Injectable()
export class AppService {
  methodGet(): OutputDto {
    return { message: 'GET Method' };
  }

  methodPost(): OutputDto {
    return { message: 'POST Method' };
  }

  methodPatch(): OutputDto {
    return { message: 'PATCH Method' };
  }

  methodPut(): OutputDto {
    return { message: 'PUT Method' };
  }

  methodDelete(): OutputDto {
    return { message: 'DELETE Method' };
  }
}
