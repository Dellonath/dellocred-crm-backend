import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateMarketingCampaignDto,
  UpdateMarketingCampaignDto
} from './dto/marketing-campaign.dto';
import { MarketingCampaign } from './entities/marketing-campaigns.entity';

@Injectable()
export class MarketingService {

  constructor(
    @InjectRepository(MarketingCampaign)
    private campaignsRepository: Repository<MarketingCampaign>,
  ) {}

  create(dto: CreateMarketingCampaignDto) {
    return 'This action adds a new marketing';
  }

  findAll() {
    return `This action returns all marketing`;
  }

  findOne(id: string) {
    return `This action returns a #${id} marketing`;
  }

  update(id: string, dto: UpdateMarketingCampaignDto) {
    return `This action updates a #${id} marketing`;
  }

  remove(id: string) {
    return `This action removes a #${id} marketing`;
  }
}
