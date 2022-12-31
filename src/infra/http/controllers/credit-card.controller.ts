import { Controller, Get, Param } from '@nestjs/common';
import { GenerateCard } from 'src/application/use-cases/generate-card';

@Controller('credit-card')
export class CreditCardController {
  constructor(private generateCard: GenerateCard) {}

  @Get('generate/:flag/:finalDigit')
  async generate(
    @Param('flag') flag: string,
    @Param('finalDigit') finalDigit: number,
  ) {
    return await this.generateCard.execute({ flag, finalDigit });
  }
}
