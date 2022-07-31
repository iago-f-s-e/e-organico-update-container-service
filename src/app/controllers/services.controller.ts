import { Controller, Post } from '@nestjs/common';
import { topics, endpoints } from '@src/domain/constants';
import { KafkaService } from '@src/infra/kafka/service';

@Controller()
export class ServicesController {
  private message = 'UPDATE';

  constructor(private readonly kafkaService: KafkaService) {}

  @Post(endpoints.E_ORGANICO_MARKET_SERVICE)
  public async marketService(): Promise<void> {
    await this.kafkaService.send(topics.E_ORGANICO_MARKET_SERVICE, this.message);
  }
}
