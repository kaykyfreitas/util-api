import { Injectable } from '@nestjs/common';
import { CreditCardDto } from 'src/infra/http/dtos/credit-card-dto';
import { generateCreditCard } from 'src/utils/generate-card-number';

interface CreditCardRequest {
  flag: string;
  finalDigit: number;
}

@Injectable()
export class GenerateCard {
  async execute(request: CreditCardRequest): Promise<CreditCardDto> {
    const { flag, finalDigit } = request;

    const cardNumber: number = generateCreditCard(flag, finalDigit)[0];

    const card: CreditCardDto = {
      number: cardNumber,
      flag: flag,
      cvv: '123',
      expires: '12/28',
      owner: 'John Doe',
    };

    return card;
  }
}
