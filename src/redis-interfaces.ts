import { DynamicModule } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { RedisOptions } from 'ioredis';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedisModuleOption extends RedisOptions {}
export interface RedisModuleOptionAsync extends Pick<DynamicModule, 'imports'> {
  useFactory?: (
    ...args: any[]
  ) => Promise<RedisModuleOption> | RedisModuleOption;
  inject?: any[];
}
