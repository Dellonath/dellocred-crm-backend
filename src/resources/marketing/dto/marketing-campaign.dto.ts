import { z } from 'zod';
import { campaignStatus, channelType } from '../../../common/enums/enums';

export const CreateMarketingCampaignSchema = z.object({
  uuid: z.string().uuid().optional(),
  campaignName: z.string().min(1).max(150),
  utmCampaign: z.string().min(1).max(100),
  campaignChannel: z.nativeEnum(channelType),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  budget: z.number(),
  objective: z.string().min(1).max(100),
  campaignStatus: z.nativeEnum(campaignStatus).optional(),
  notes: z.string().optional(),
});

export type CreateMarketingCampaignDto = z.infer<typeof CreateMarketingCampaignSchema>;
export const UpdateMarketingCampaignSchema = CreateMarketingCampaignSchema.partial();
export type UpdateMarketingCampaignDto = z.infer<typeof UpdateMarketingCampaignSchema>;