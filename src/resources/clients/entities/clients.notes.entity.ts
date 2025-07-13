import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { User } from "../../users/entities/users.entity";
import { Client } from "./clients.entity";

@Entity({ name: "clients_notes" })
export class ClientNote {
  @PrimaryGeneratedColumn("uuid")
  // Unique identifier for the note
  uuid: string;

  @ManyToOne(() => Client, { nullable: false })
  @JoinColumn({ name: "client_uuid", referencedColumnName: "uuid" })
  // Reference to the related client
  clientUuid: Client;

  @ManyToMany(() => User, { nullable: false })
  @JoinColumn({ name: "user_uuid", referencedColumnName: "uuid" })
  // Reference to the user who created the note
  userUuid: User;

  @Column({
    name: "note",
    type: "varchar",
    length: 256,
    nullable: false,
    comment: "Content of the note used for follow-up"
  })
  note: string;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp"
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp"
  })
  updatedAt: Date;
}
