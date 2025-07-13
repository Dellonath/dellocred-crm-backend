import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes
} from "@nestjs/common";

import { ZodValidationPipe } from "../../zod-validation.pipe";
import {
  CreateLoanSaleDto,
  CreateLoanSaleSchema,
  UpdateLoanSaleDto,
  UpdateLoanSaleSchema
} from "./dto/loan-sale.dto";
import { LoansService } from "./loans.service";

@Controller("loans")
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateLoanSaleSchema))
  create(@Body() dto: CreateLoanSaleDto) {
    return this.loansService.create(dto);
  }

  @Get()
  findAll() {
    return this.loansService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.loansService.findOne(id);
  }

  @Patch(":id")
  @UsePipes(new ZodValidationPipe(UpdateLoanSaleSchema))
  update(@Param("id") id: string, @Body() dto: UpdateLoanSaleDto) {
    return this.loansService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.loansService.remove(id);
  }
}
