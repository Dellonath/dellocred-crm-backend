import { z } from 'zod';
import {
  channelType,
  educationLevel,
  gender,
  jobPosition,
  maritialStatus,
  state
} from '../../../common/enums/enums';


export const CreateUserSchema = z.object({
  uuid: z.string().uuid().optional(),
  govId: z.string().length(11),
  firstName: z.string().min(1).max(64),
  lastName: z.string().min(1).max(64),
  email: z.string().email().max(64),
  phoneNumber: z.string().min(1).max(64),
  jobPosition: z.nativeEnum(jobPosition),
  channelType: z.nativeEnum(channelType),
  birthDate: z.coerce.date().optional(),
  gender: z.nativeEnum(gender).optional(),
  maritialStatus: z.nativeEnum(maritialStatus).optional(),
  educationLevel: z.nativeEnum(educationLevel).optional(),
  country: z.string().optional(),
  state: z.nativeEnum(state).optional(),
  city: z.string().optional(),
  addressNeighborhood: z.string().optional(),
  addressStreet: z.string().optional(),
  addressNumber: z.number().optional(),
  addressComplement: z.string().optional(),
  postalCode: z.string().min(1).max(20).optional(),
  isActive: z.boolean().optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export const UpdateUserSchema = CreateUserSchema.partial();
export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;