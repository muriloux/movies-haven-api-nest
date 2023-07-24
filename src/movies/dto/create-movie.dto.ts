//import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  //@IsNotEmpty()
  //@IsString()
  id: string;
  title: string;
  curatorName: string;
}
