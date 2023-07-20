import { Module } from '@nestjs/common';
import { CuratorsService } from './curators.service';
import { CuratorsController } from './curators.controller';

@Module({
  controllers: [CuratorsController],
  providers: [CuratorsService]
})
export class CuratorsModule {}
