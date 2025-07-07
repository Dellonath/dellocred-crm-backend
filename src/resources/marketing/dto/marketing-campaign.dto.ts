import { PartialType } from '@nestjs/mapped-types';

export class CreateMarketingDto {}

export class UpdateMarketingDto extends PartialType(CreateMarketingDto) {}
