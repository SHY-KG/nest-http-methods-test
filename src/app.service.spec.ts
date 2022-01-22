import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('HTTP METHODS TEST', () => {
    it('should success to return get', () => {
      const expected = { message: 'GET Method' };
      expect(appService.methodGet()).toEqual(expected);
    });

    it('should success to return post', () => {
      const expected = { message: 'POST Method' };
      expect(appService.methodPost()).toEqual(expected);
    });

    it('should success to return patch', () => {
      const expected = { message: 'PATCH Method' };
      expect(appService.methodPatch()).toEqual(expected);
    });

    it('should success to return put', () => {
      const expected = { message: 'PUT Method' };
      expect(appService.methodPut()).toEqual(expected);
    });

    it('should success to return delete', () => {
      const expected = { message: 'DELETE Method' };
      expect(appService.methodDelete()).toEqual(expected);
    });
  });
});
