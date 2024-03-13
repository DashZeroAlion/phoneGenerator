// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from 'src/controllers/country.controller';
import { CountryService } from 'src/services/country.service';
import { Country, CountrySchema } from 'src/schemas/country.schema';
import { PhoneNumberSchema } from 'src/schemas/phone-number.schema';
import { PhoneNumberService } from 'src/services/phone-numbers.service';
import { PhoneNumberController } from 'src/controllers/phone-numbers.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'phoneNumberGenerator',
    }),
    MongooseModule.forFeature([
      { name: Country.name, schema: CountrySchema },
      { name: 'PhoneNumber', schema: PhoneNumberSchema },
    ]),
  ],
  controllers: [CountryController, PhoneNumberController],
  providers: [CountryService, PhoneNumberService],
})
export class AppModule {}
