import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class InitService {


  constructor(
      @Inject('authProxyFactory') private readonly clientProxy: ClientProxy,
      private configService: ConfigService,
  ) {}
  addOwner() {
    const pattern = { cmd: 'auth-signUp' };
    const authCredential = {email: this.configService.get('OWNER_EMAIL'),password:this.configService.get('OWNER_PASSWORD'),typeClient:'Owner'}
    return this.send(pattern, authCredential);
  }

  private send(pattern: any, payload: any) {
    return this.clientProxy.send(pattern, payload);
  }
}
