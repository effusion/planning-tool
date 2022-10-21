import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Technology } from './schema/technology.schema';
import { Model } from 'mongoose';
import { CreateTechDto } from './dto/create-tech.dto';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectModel(Technology.name)
    private readonly technologyModel: Model<Technology>,
  ) {}

  async create(technology: CreateTechDto): Promise<Technology> {
    const tech = new CreateTechDto();
    tech.name = technology.name.toLowerCase();
    tech.type = technology.type;
    return this.technologyModel.findOneAndUpdate({ name: tech.name }, tech, {
      upsert: true,
    });
  }

  async findAll(): Promise<Technology[]> {
    return this.technologyModel.find().exec();
  }
}
