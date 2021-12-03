import { map, Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

// bbox=56.964167,35.026667,56.950592,34.915924

@Injectable()
export class WmsService {
  constructor(private httpService: HttpService) {}

  getImage(
    width: number,
    height: number,
    bbox: string,
    time: string,
  ): Observable<AxiosResponse<string>> {
    return this.httpService
      .get(
        'https://services.sentinel-hub.com/ogc/wms/1408366e-f79d-457e-a002-9c877e470007?service=WMS&request=GetMap&format=image%2Fpng&srs=EPSG%3A3857&layers=TRUE_COLOR&showlogo=false&transparent=true&priority=leastCC&upsampling=BICUBIC&downsampling=NEAREST&CRS=EPSG:4326',
        {
          params: {
            width: width,
            height: height,
            bbox: bbox,
            time: time,
          },
          responseType: 'arraybuffer',
        },
      )
      .pipe(map((response) => response));
  }
}
