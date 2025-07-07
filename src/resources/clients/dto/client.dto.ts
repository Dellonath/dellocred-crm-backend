import { z } from 'zod';
import {
    channelType,
    clientSector,
    educationLevel,
    gender,
    maritialStatus,
    negotiationStatus,
    state,
    utmMedium,
    utmSource
} from '../../../enums/index';

export const CreateClientSchema = z.object({
  uuid: z.string().uuid().optional(),
  negotiationStatus: z.nativeEnum(negotiationStatus).optional(),
  govId: z.string().length(11),
  firstName: z.string().min(1).max(64),
  lastName: z.string().min(1).max(64),
  email: z.string().email().max(64),
  phoneNumber: z.string().regex(/^\+?\d{10,15}$/).min(1).max(20),
  channelType: z.nativeEnum(channelType).optional(),
  birthDate: z.coerce.date().optional(),
  gender: z.nativeEnum(gender).optional(),
  occupation: z.string().optional(),
  maritialStatus: z.nativeEnum(maritialStatus).optional(),
  educationLevel: z.nativeEnum(educationLevel).optional(),
  wage: z.number().optional(),
  clientSector: z.nativeEnum(clientSector).optional(),
  country: z.string().optional(),
  state: z.nativeEnum(state).optional(),
  city: z.string().optional(),
  addressNeighborhood: z.string().optional(),
  addressStreet: z.string().optional(),
  addressNumber: z.number().optional(),
  addressComplement: z.string().optional(),
  postalCode: z.string().optional(),
  utmSource: z.nativeEnum(utmSource).optional(),
  utmMedium: z.nativeEnum(utmMedium).optional(),
  utmCampaign: z.string().optional(),
  createdByUserUuid: z.string().optional(),
  isActive: z.boolean().optional()
});

export type CreateClientDto = z.infer<typeof CreateClientSchema>;
export const UpdateClientSchema = CreateClientSchema.partial();
export type UpdateClientDto = z.infer<typeof UpdateClientSchema>;