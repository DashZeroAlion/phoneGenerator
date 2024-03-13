// phone-numbers.service.ts
import { Injectable } from '@nestjs/common';
import { parsePhoneNumberFromString, CountryCode, getCountryCallingCode } from 'libphonenumber-js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhoneNumber } from 'src/schemas/phone-number.schema'; // Update the import path as per your project structure

@Injectable()
export class PhoneNumberService {
  constructor(
    @InjectModel(PhoneNumber.name) private phoneNumberModel: Model<PhoneNumber>,
  ) {}

  private generateRandomPhoneNumber(countryDialCode: string): string {
    // Assuming the local number part without the country calling code is 8 digits
    const localNumberLength = 8;
    let localNumber = countryDialCode;
    for (let i = 0; i < localNumberLength; i++) {
      localNumber += Math.floor(Math.random() * 10).toString();
      
    }
    console.log(localNumber)
    return localNumber;
  }

  public async generateAndValidatePhoneNumbers(quantity: number, countryCode: string, countryDialCode: string): Promise<any> {
   
    const validNumbers = [];
    let totalValid = 0;
    for (let i = 0; i < quantity; i++) {
      // Generate a random phone number
      const phoneNumberString = this.generateRandomPhoneNumber(countryDialCode);
      // Parse and validate the phone number
      const phoneNumber = parsePhoneNumberFromString(phoneNumberString, countryCode as CountryCode);
      if (phoneNumber && phoneNumber.isValid()) {
        totalValid++;
        validNumbers.push(new this.phoneNumberModel({
          phoneNumber: phoneNumber.number,
          isValidForCountry: true,
          countryCode: phoneNumber.country,
          phoneNumberType: phoneNumber.getType() || 'UNKNOWN', // getType might return undefined, so we default to 'UNKNOWN'
        }));
      }
    }

    // Save valid phone numbers to the database
    await this.phoneNumberModel.insertMany(validNumbers);
    // Calculate the percentage of valid numbers
    const percentage = (totalValid / quantity) * 100;
    // Return the response message
    return {
      quantity,
      totalValid,
      percentage,
      message: `Out of the ${quantity} numbers generated, ${totalValid} were found to be valid for the country, which calculates to ${percentage.toFixed(2)}% valid results.`,
    };
  }
}
