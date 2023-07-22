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
    return this.prisma.movie.findUnique({
      where: { id },
    });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    const { title } = updateMovieDto;

    return this.prisma.movie.update({
      where: {
        id: id,
      },
      data: { title: title },
    });
  }

  remove(id: number) {
    return this.prisma.movie.delete({ where: { id } });
  }
}
