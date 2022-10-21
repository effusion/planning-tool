import { Module } from '@nestjs/common';
import { TechnologyService } from './technology.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnectionName } from '../app.module';
import { Technology, TechnologySchema } from './schema/technology.schema';
import { TechnologyController } from './technology.controller';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Technology.name,
          schema: TechnologySchema,
          collection: 'technologies',
        },
      ],
      DatabaseConnectionName,
    ),
  ],
  providers: [TechnologyService],
  controllers: [TechnologyController],
  exports: [TechnologyService, MongooseModule],
})
export class TechnologyModule {}
