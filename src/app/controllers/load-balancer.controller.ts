import { Controller, Post } from '@nestjs/common';
import { topics, endpoints } from '@src/domain/constants';
import { KafkaService } from '@src/infra/kafka/service';

@Controller()
export class LoadBalancerController {
  private message = 'UPDATE';

  constructor(private readonly kafkaService: KafkaService) {}

  @Post(endpoints.LOAD_BALANCER_E_ORGANICO)
  public async loadBalancerRoot(): Promise<void> {
    await this.kafkaService.send(topics.LOAD_BALANCER_E_ORGANICO, this.message);
  }
}
