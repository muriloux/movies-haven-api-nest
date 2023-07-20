import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  create(movie: CreateMovieDto) {
    return this.prisma.movie.create({ data: movie });
  }

  async createMany(moviesDto: { movies: CreateMovieDto[] }) {
    const { movies } = moviesDto;
    const createManyPromises = movies.map((movie) => {
      return this.create(movie);
    });
    return Promise.all(createManyPromises);
  }

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `updated`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
