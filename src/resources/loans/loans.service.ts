import { Injectable } from "@nestjs/common";

import { CreateLoanSaleDto, UpdateLoanSaleDto } from "./dto/loan-sale.dto";

@Injectable()
export class LoansService {
  create(dto: CreateLoanSaleDto) {
    return "This action adds a new loan";
  }

  findAll() {
    return `This action returns all loans`;
  }

  findOne(id: string) {
    return `This action returns a #${id} loan`;
  }

  update(id: string, dto: UpdateLoanSaleDto) {
    return `This action updates a #${id} loan`;
  }

  remove(id: string) {
    return `This action removes a #${id} loan`;
  }
}
