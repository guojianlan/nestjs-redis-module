import {
  DynamicModule,
  Global,
  Inject,
  Injectable,
  Module,
  OnModuleDestroy,
} from '@nestjs/common';
import { REDIS_MODULE_OPTION, REDIS_SERVICE } from './redis-constants';
import * as Ioredis from 'ioredis';

@Global()
@Module({})
export class RedisCoreModule implements OnModuleDestroy {
  constructor() {
    console.log('RedisCoreModule');
  }
  onModuleDestroy() {
    console.log('关闭连接');
  }
  static forRoot(options: any): DynamicModule {
    return {
      module: RedisCoreModule,
      providers: [
        {
          provide: REDIS_MODULE_OPTION,
          useValue: options,
        },
        {
          provide: REDIS_SERVICE,
          useFactory: (options) => {
            console.log('123123', options);
            return new Ioredis(options);
          },
          inject: [REDIS_MODULE_OPTION],
        },
      ],
      exports: [REDIS_SERVICE],
    };
  }
  static forRootAsync(options): DynamicModule {
    return {
      module: RedisCoreModule,
      imports: options.imports,
      providers: [
        {
          provide: REDIS_MODULE_OPTION,
          useFactory: options.useFactory,
          inject: options.inject,
        },
        {
          provide: REDIS_SERVICE,
          useFactory: (options) => {
            console.log('redis', options);
            return new Ioredis(options);
          },
          inject: [REDIS_MODULE_OPTION],
        },
      ],
      exports: [REDIS_SERVICE],
    };
  }
}
