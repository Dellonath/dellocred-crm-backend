import { z } from 'zod';


export const CreateClientNoteSchema = z.object({
  uuid: z.string().uuid().optional(),
  clientUuid: z.string().uuid(),
  userUuid: z.string().uuid(),
  note: z.string().min(1).max(64),
});

export type CreateClientNoteDto = z.infer<typeof CreateClientNoteSchema>;
export const UpdateClientNoteSchema = CreateClientNoteSchema.partial();
export type UpdateClientNoteDto = z.infer<typeof UpdateClientNoteSchema>;