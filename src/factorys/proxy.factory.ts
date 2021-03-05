import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const getAuthProxyFactory = () => {
  return {
    provide: 'authProxyFactory',
    useFactory: (configService: ConfigService) => {
      const guestUrls = [`amqp://${configService.get('RABBIT_USER')}:${configService.get('RABBITMQ_PASSWORD')}@${configService.get('RABBIT_HOST')}:5672`];
      return ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: guestUrls,
          queue: 'microfunctions_auth',
          queueOptions: {
            durable: true,
          },
        },
      });
    },
    inject: [ConfigService],
  };
};
