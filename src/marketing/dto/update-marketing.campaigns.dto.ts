import { PartialType } from '@nestjs/mapped-types';
import { CreateMarketingDto } from './create-marketing.campaigns.dto';

export class UpdateMarketingDto extends PartialType(CreateMarketingDto) {}
