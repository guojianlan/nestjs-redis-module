import { Inject } from '@nestjs/common';
import { REDIS_SERVICE } from './redis-constants';

export const InjectRedisClient = () => Inject(REDIS_SERVICE);
