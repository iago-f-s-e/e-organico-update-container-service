import { Module } from '@nestjs/common';
import { ContainerModule } from './container';
import { KafkaModule } from './kafka';

@Module({
  imports: [KafkaModule, ContainerModule],
  exports: [KafkaModule, ContainerModule]
})
export class InfraModule {}
