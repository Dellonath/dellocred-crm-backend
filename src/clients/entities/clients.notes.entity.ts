import { User } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Client } from './clients.entity';

@Entity({ name: 'clients_notes' })
export class ClientNotes {

  @PrimaryGeneratedColumn('uuid')
  // Unique identifier for the note
  uuid: string;

  @ManyToOne(() => Client, { nullable: false })
  @JoinColumn({ name: 'client_uuid' })
  // Reference to the related client
  clientUuid: Client;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_uuid' })
  // Reference to the user who created the note
  userUuid: User;

  @Column({
    name: 'note',
    type: 'varchar',
    length: 256,
    nullable: false,
    comment: 'Content of the note, used in follow-up'
  })
  note: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp'
  })
  updatedAt: Date;
}