import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app';
import cors from 'cors';
import helmet from 'helmet';
import { kafkaConnection } from '@src/infra/kafka/config';
import { PORT } from './settings';

async function bootstrap(): Promise<any> { // eslint-disable-line 
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(kafkaConnection);

  await app.startAllMicroservices();

  app.setGlobalPrefix('api/update-container');
  app.use(cors());
  app.use(helmet());

  return app.listen(PORT, () => {
    console.log('===============================');
    console.log(`Server running on port: ${PORT} =`);
    console.log('===============================');
  });
}

const server = { bootstrap };

export default server;
