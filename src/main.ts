import { NestFactory } from '@nestjs/core';
import { InitModule } from './init.module';
import {InitService} from "./init.service";

async function bootstrap() {

  const app = await NestFactory.createApplicationContext(InitModule);
  const appService = app.get(InitService);
  appService.addOwner().subscribe((res)=>{
    process.exit(0)
  },error => process.exit(1))

}
bootstrap();
