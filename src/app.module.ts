import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { CuratorsModule } from './curators/curators.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MoviesModule, CuratorsModule, PrismaModule],
})
export class AppModule {}
