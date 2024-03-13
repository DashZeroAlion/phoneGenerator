import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Use the @Schema decorator to define a Mongoose schema
@Schema()
export class PhoneNumber extends Document {
  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  countryCode: string;

  @Prop({ required: true })
  phoneNumberType: string;

  @Prop({ required: true, default: false })
  matchesPossibleLength: boolean;

  @Prop({ required: true, default: false })
  isValidForCountry: boolean;
}

// Use the SchemaFactory to generate a schema based on the PhoneNumber class
export const PhoneNumberSchema = SchemaFactory.createForClass(PhoneNumber);