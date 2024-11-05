import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [ProductModule, CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
