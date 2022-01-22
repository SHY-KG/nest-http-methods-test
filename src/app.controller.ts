import {
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { OutputDto } from './dtos/output.dto';

@ApiTags('HTTP METHODS')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  methodGet(@Headers() headers, @Param() params): OutputDto {
    const result = { params, headers, ...this.appService.methodGet() };
    return result;
  }

  @Post('/post')
  methodPost(@Headers() headers, @Param() params): OutputDto {
    const result = { params, headers, ...this.appService.methodPost() };
    return result;
  }

  @Patch('/patch')
  methodPatch(@Headers() headers, @Param() params): OutputDto {
    const result = { params, headers, ...this.appService.methodPatch() };
    return result;
  }

  @Put('/put')
  methodPut(@Headers() headers, @Param() params): OutputDto {
    const result = { params, headers, ...this.appService.methodPut() };
    return result;
  }

  @Delete('/delete')
  methodDelete(@Headers() headers, @Param() params): OutputDto {
    const result = { params, headers, ...this.appService.methodDelete() };
    return result;
  }
}
