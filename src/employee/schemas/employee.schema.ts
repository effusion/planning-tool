import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Technology,
  TechnologyType,
} from '../../technology/schema/technology.schema';

export enum Country {
  UNKNOWN,
  CH,
  CZ,
}

export enum ProficiencyLevel {
  UNKNOWN,
  INTERN,
  JUNIOR,
  PROFESSIONAL,
  SENIOR,
  STEWARD,
}

export enum WorkGroup {
  UNKNOWN,
  GROUP_2,
  MANUL,
  LYNX,
  ATLAS,
}

export class Skill extends Document {
  @Prop()
  level: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: Technology.name }] })
  technologyId: Types.ObjectId;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

@Schema()
export class Employee extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  abbreviation: string;

  @Prop({ type: String, enum: Country })
  country: Country;

  @Prop({ type: String, enum: ProficiencyLevel })
  proficiencyLevel: ProficiencyLevel;

  @Prop({ type: String, enum: WorkGroup })
  workGroup: WorkGroup;

  @Prop()
  skills: Skill[];
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
EmployeeSchema.index({ abbreviation: 1 }, { unique: true });
