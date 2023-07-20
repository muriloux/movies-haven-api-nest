//import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  //@IsNotEmpty()
  //@IsString()
  id: number;
  title: string;
}
