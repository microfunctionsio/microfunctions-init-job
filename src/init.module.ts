
import { InitService } from './init.service';
import {Module} from "@nestjs/common";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getAuthProxyFactory} from "./factorys/proxy.factory";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./config.${process.env.NODE_ENV}.env`,
    }),


  ],
  providers: [InitService, getAuthProxyFactory()],
})
export class InitModule {}
