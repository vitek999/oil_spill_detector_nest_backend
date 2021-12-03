import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { WmsService } from '../../service/wms.service';

@Controller('wms')
export class WmsController {
  constructor(private readonly wmsService: WmsService) {}

  @Get()
  async getImage(
    @Query('width') width: number,
    @Query('height') height: number,
    @Query('bbox') bbox: string,
    @Query('time') time: string, // example 2016-01-01/2021-11-02
    @Res() res: Response,
  ) {
    await this.wmsService
      .getImage(width ?? 512, height ?? 512, bbox, time)
      .toPromise()
      .then((value) => {
        console.log(value.data);
        res.setHeader('Content-Type', value.headers['content-type']);
        res.send(value.data);
      });
  }
}
