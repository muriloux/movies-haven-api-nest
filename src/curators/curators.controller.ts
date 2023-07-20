import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CuratorsService } from './curators.service';
import { CreateCuratorDto } from './dto/create-curator.dto';
import { UpdateCuratorDto } from './dto/update-curator.dto';

@Controller('curators')
export class CuratorsController {
  constructor(private readonly curatorsService: CuratorsService) {}

  @Post()
  create(@Body() createCuratorDto: CreateCuratorDto) {
    return this.curatorsService.create(createCuratorDto);
  }

  @Get()
  findAll() {
    return this.curatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curatorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCuratorDto: UpdateCuratorDto) {
    return this.curatorsService.update(+id, updateCuratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curatorsService.remove(+id);
  }
}
