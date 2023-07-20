import { Injectable } from '@nestjs/common';
import { CreateCuratorDto } from './dto/create-curator.dto';
import { UpdateCuratorDto } from './dto/update-curator.dto';

@Injectable()
export class CuratorsService {
  create(createCuratorDto: CreateCuratorDto) {
    return 'This action adds a new curator';
  }

  findAll() {
    return `This action returns all curators`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curator`;
  }

  update(id: number, updateCuratorDto: UpdateCuratorDto) {
    return `This action updates a #${id} curator`;
  }

  remove(id: number) {
    return `This action removes a #${id} curator`;
  }
}
