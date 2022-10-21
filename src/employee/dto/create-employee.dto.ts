import {
  Country,
  ProficiencyLevel,
  WorkGroup,
} from '../schemas/employee.schema';
import { Types } from 'mongoose';

export interface CreateEmployeeDto {
  readonly fistName: string;
  readonly lastName: string;
  readonly abbreviation: string;
  readonly country: Country;
  readonly proficiencyLevel: ProficiencyLevel;
  readonly workgroup: WorkGroup;
  readonly skills: LinkSkillDto[];
}

export interface LinkSkillDto {
  readonly level: number;
  readonly technologyId: Types.ObjectId;
}
