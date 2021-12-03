import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WmsModule } from './modules/wms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personal } from './entity/personal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Personal],
    }),
    WmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
