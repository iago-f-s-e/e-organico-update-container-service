import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { kafkaConnection, provider } from './config';
import { KafkaService } from './service';

@Module({
  imports: [ClientsModule.register([kafkaConnection])],
  providers: [provider, KafkaService],
  exports: [KafkaService]
})
export class KafkaModule {}
