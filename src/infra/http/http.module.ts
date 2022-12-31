import { Module } from '@nestjs/common';
import { GenerateCard } from 'src/application/use-cases/generate-card';
import { CreditCardController } from './controllers/credit-card.controller';
@Module({
  imports: [],
  controllers: [CreditCardController],
  providers: [GenerateCard],
})
export class HttpModule {}
