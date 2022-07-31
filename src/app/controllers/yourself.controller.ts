import { Controller, Post } from '@nestjs/common';
import { topics, endpoints } from '@src/domain/constants';
import { KafkaService } from '@src/infra/kafka/service';

@Controller()
export class YourSelfController {
  private message = 'UPDATE';

  constructor(private readonly kafkaService: KafkaService) {}

  @Post(endpoints.UPDATE_YOURSELF)
  public async yourself(): Promise<void> {
    await this.kafkaService.send(topics.UPDATE_YOURSELF, this.message);
  }
}
