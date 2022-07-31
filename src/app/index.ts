import { Module } from '@nestjs/common';
import { InfraModule } from '@src/infra';
import * as Controllers from './controllers';

const controllers = Object.values(Controllers);

@Module({
  imports: [InfraModule],
  controllers
})
export class AppModule {}
