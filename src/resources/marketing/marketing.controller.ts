import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from '../../zod-validation.pipe';
import {
  CreateMarketingCampaignDto,
  CreateMarketingCampaignSchema,
  UpdateMarketingCampaignDto,
  UpdateMarketingCampaignSchema
} from './dto/marketing-campaign.dto';
import { MarketingService } from './marketing.service';

@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateMarketingCampaignSchema))
  create(@Body() createMarketingDto: CreateMarketingCampaignDto) {
    return this.marketingService.create(createMarketingDto);
  }

  @Get()
  findAll() {
    return this.marketingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketingService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateMarketingCampaignSchema))
  update(@Param('id') id: string, @Body() updateMarketingDto: UpdateMarketingCampaignDto) {
    return this.marketingService.update(id, updateMarketingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketingService.remove(id);
  }
}