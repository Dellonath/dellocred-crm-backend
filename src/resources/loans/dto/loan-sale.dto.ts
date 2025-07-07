import { loanType } from 'src/enums';
import { z } from 'zod';

export const CreateLoanSaleSchema = z.object({
  uuid: z.string().uuid().optional(),
  clientUuid: z.string().uuid(),
  userUuid: z.string().uuid(),
  loanProduct: z.nativeEnum(loanType).optional(),
  loanAmount: z.number(),
  soldRate: z.number(),
  installmentsQuantity: z.number(),
  commissionPercentage: z.number(),
  commissionAmount: z.number(),
  saleDate: z.coerce.date(),
  notes: z.string().optional(),
});

export type CreateLoanSaleDto = z.infer<typeof CreateLoanSaleSchema>;

export const UpdateLoanSaleSchema = CreateLoanSaleSchema.partial();
export type UpdateLoanSaleDto = z.infer<typeof UpdateLoanSaleSchema>;