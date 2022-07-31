import { Inject, Injectable } from '@nestjs/common';
import { Producer, RecordMetadata } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class KafkaService {
  constructor(@Inject('KAFKA_PROVIDER') private readonly producer: Producer) {}

  public async send<T>(topic: string, data: T): Promise<RecordMetadata[]> {
    return this.producer.send({
      topic,
      messages: [
        {
          key: topic,
          value: JSON.stringify(data)
        }
      ]
    });
  }
}
