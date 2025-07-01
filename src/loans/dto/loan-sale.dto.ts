import { PartialType } from '@nestjs/mapped-types';

export class CreateLoanSaleDto {}

export class UpdateLoanSaleDto extends PartialType(CreateLoanSaleDto) {}

