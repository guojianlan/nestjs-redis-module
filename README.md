## nestjs-redis-module
```ts
// app引入和使用
import { RedisModule } from 'nestjs-redis-';
RedisModule.forRootAsync({
      imports: [],
      useFactory: async () => {
        return {
          host: '127.0.0.1',
          port: 6378,
          password: '5201314qv',
        };
      },
      inject: [],
    }),
```

## service引入
```ts
import { InjectRedisClient } from 'nestjs-redis-module';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  constructor(
    @InjectRedisClient() private readonly redis: Redis,
  ) {
  
  }
  getHello(): string {
    return 'Hello World!';
  }
}

```
