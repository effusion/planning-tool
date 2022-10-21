import { Body, Controller, Get, Post } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { CreateTechDto } from './dto/create-tech.dto';
import { Technology } from './schema/technology.schema';

@Controller('technology')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  @Post()
  async create(@Body() createTechDto: CreateTechDto) {
    await this.technologyService.create(createTechDto);
  }

  @Get()
  async findAll(): Promise<Technology[]> {
    return this.technologyService.findAll();
  }
}
