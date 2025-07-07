import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarketingDto, UpdateMarketingDto } from './dto/marketing-campaign.dto';
import { MarketingCampaign } from './entities/marketing-campaigns.entity';

@Injectable()
export class MarketingService {

  constructor(
      @InjectRepository(MarketingCampaign)
      private campaignsRepository: Repository<MarketingCampaign>,
    ) {}

  create(createMarketingDto: CreateMarketingDto) {
    return 'This action adds a new marketing';
  }

  findAll() {
    return `This action returns all marketing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marketing`;
  }

  update(id: number, updateMarketingDto: UpdateMarketingDto) {
    return `This action updates a #${id} marketing`;
  }

  remove(id: number) {
    return `This action removes a #${id} marketing`;
  }
}
