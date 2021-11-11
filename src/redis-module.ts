import { Module, DynamicModule } from '@nestjs/common';
import { RedisCoreModule } from './redis-core-module';
import { RedisModuleOption, RedisModuleOptionAsync } from './redis-interfaces';

@Module({})
export class RedisModule {
  static forRoot(options: RedisModuleOption): DynamicModule {
    console.log('123123123123');
    console.log(options);
    return {
      module: RedisModule,
      imports: [RedisCoreModule.forRoot(options)],
    };
  }
  static forRootAsync(options: RedisModuleOptionAsync): DynamicModule {
    return {
      module: RedisModule,
      imports: [RedisCoreModule.forRootAsync(options)],
    };
  }
}
