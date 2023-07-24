import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  create(movie: CreateMovieDto) {
    const buffer = Buffer.alloc(12);
    const uuid = uuidv4({}, buffer);

    return this.prisma.movie.create({
      data: {
        id: uuid.toString('hex'),
        title: movie.title,
        curatorName: movie.curatorName,
      },
    });
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

  findOne(id: string) {
    return this.prisma.movie.findUnique({
      where: { id },
    });
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    const { title, curatorName } = updateMovieDto;

    return this.prisma.movie.update({
      where: {
        id: id,
      },
      data: { title: title, curatorName: curatorName },
    });
  }

  remove(id: string) {
    return this.prisma.movie.delete({ where: { id } });
  }
}
