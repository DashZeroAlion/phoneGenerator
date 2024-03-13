import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CountryService } from 'src/services/country.service';
import { Country } from 'src/schemas/country.schema';

@Controller('api/countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAllCountries(): Promise<Country[]> {
    try {
      return await this.countryService.findAll();
    } catch (error) {
      throw new HttpException('Failed to retrieve countries', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
