import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WmsModule } from './modules/wms.module';

@Module({
  imports: [WmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
