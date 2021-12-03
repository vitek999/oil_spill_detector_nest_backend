import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WmsService } from '../service/wms.service';
import { WmsController } from '../controller/wms/wms.controller';

@Module({
  imports: [HttpModule],
  controllers: [WmsController],
  providers: [WmsService],
})
export class WmsModule {}
