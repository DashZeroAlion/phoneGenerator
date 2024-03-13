// phone-number.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus, BadRequestException, Injectable } from '@nestjs/common';
import { PhoneNumberService } from 'src/services/phone-numbers.service';

@Controller('api')
export class PhoneNumberController {
  constructor(private phoneNumberService: PhoneNumberService) {}

  @Post('validate-phone-numbers')
  @HttpCode(HttpStatus.OK) // Explicitly setting the HTTP status code for the response
  async validatePhoneNumbers(
    @Body() body: { quantity: number; countryCode: string; countryDialCode: string }
  ): Promise<{ message: string }> {
    const { quantity, countryCode,countryDialCode  } = body;

    // Validate the input
    if (quantity < 1 || quantity > 10000) {
      throw new BadRequestException('Quantity must be between 1 and 10000');
    }

    try {
      // Generate and validate phone numbers
      const { totalValid, percentage, message } = await this.phoneNumberService.generateAndValidatePhoneNumbers(quantity, countryCode, countryDialCode);

      // Return the response message
      return { message };
    } catch (error) {
      // Handle any errors that occur during the process
      throw new BadRequestException(error.message);
    }
  }
}