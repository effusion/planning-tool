import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TechnologyType {
  UNKNOWN,
  DATABASE,
  FRAMEWORK,
  LIBRARY,
  LANGUAGE,
  PLATFORM,
  DEVOPS,
  TOOL,
  OPERATING_SYSTEM,
  CLOUD_PROVIDER,
  PAYMENT_PROVIDER,
  CRM,
  SERVERLESS,
  PROTOCOL,
  CMS,
  BLOCKCHAIN,
}

@Schema()
export class Technology extends Document {
  @Prop()
  name: string;

  @Prop({ type: String, enum: TechnologyType })
  type: TechnologyType;
}
export const TechnologySchema = SchemaFactory.createForClass(Technology);
TechnologySchema.index({ name: 1 }, { unique: true });
