// src/services/country.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from 'src/schemas/country.schema';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) {}

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }
}