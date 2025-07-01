import { Injectable } from '@nestjs/common';
import { CreateLoanSaleDto, UpdateLoanSaleDto } from './dto/loan-sale.dto';

@Injectable()
export class LoansService {
  create(dto: CreateLoanSaleDto) {
    return 'This action adds a new loan';
  }

  findAll() {
    return `This action returns all loans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loan`;
  }

  update(id: number, dto: UpdateLoanSaleDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: number) {
    return `This action removes a #${id} loan`;
  }
}
