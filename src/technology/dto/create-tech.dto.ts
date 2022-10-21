import { TechnologyType } from '../schema/technology.schema';

export class CreateTechDto {
  name: string;
  type: TechnologyType;
}
