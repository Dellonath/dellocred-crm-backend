import { DataSource } from 'typeorm';
import { MarketingCampaign } from './entities/marketing.campaigns.entity';

export const marketingCampaignProviders = [
  {
    provide: 'MARKETING_CAMPAIGN_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(MarketingCampaign),
    inject: ['DATA_SOURCE'],
  },
];