import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { MarketingCampaign } from "./entities/marketing-campaigns.entity";
import { MarketingController } from "./marketing.controller";
import { MarketingService } from "./marketing.service";

@Module({
  imports: [TypeOrmModule.forFeature([MarketingCampaign])],
  controllers: [MarketingController],
  providers: [MarketingService]
})
export class MarketingModule {}
