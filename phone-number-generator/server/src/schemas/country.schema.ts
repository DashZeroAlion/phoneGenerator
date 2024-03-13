// src/schemas/country.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountryDocument = Country & Document;

@Schema()
export class Country {
  @Prop()
  name: string;

  @Prop()
  dial_code: string;

  @Prop()
  code: string;
  // Add other properties as needed
}

export const CountrySchema = SchemaFactory.createForClass(Country).set('collection', 'countries');