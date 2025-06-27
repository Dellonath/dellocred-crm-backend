import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  clientSector,
  educationLevel,
  gender,
  maritialStatus,
  originChannel,
  state,
  utmMedium,
  utmSource
} from './enums/clients.entity.enums';

@Entity({ name: 'clients' })
export class Client {

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'gov_id', type: 'varchar', length: 11, unique: true, nullable: false, })
  govId: string;

  @Column({ name: 'first_name', type: 'varchar', length: 64, nullable: false })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 64, nullable: false })
  lastName: string;

  @Column({ name: 'email', type: 'varchar', length: 64, unique: true, nullable: false })
  email: string;

  @Column({ name: 'phone_number', type: 'varchar', length: 64, unique: true, nullable: false })
  phoneNumber: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: Date;

  @Column({ name: 'gender', type: 'enum', enum: gender, nullable: true })
  gender: gender;

  @Column({ name: 'occupation', type: 'varchar', length: 64, nullable: true })
  occupation: string;

  @Column({ name: 'maritial_status', type: 'enum', enum: maritialStatus, nullable: true })
  maritialStatus: maritialStatus;

  @Column({ name: 'education_level', type: 'enum', enum: educationLevel, nullable: true })
  educationLevel: educationLevel;

  @Column({ name: 'wage', type: 'decimal', precision: 12, scale: 2, nullable: true })
  wage: number;

  @Column({ name: 'client_sector', type: 'enum', enum: clientSector, nullable: true })
  clientSector: clientSector;

  @Column({ name: 'country', type: 'varchar', length: 64, default: 'BRAZIL' })
  country: string;

  @Column({ name: 'state', type: 'enum', enum: state, nullable: true })
  state: state;

  @Column({ name: 'city', type: 'varchar', length: 64, nullable: true })
  city: string;

  @Column({ name: 'address_street', type: 'varchar', length: 64, nullable: true })
  addressStreet: string;

  @Column({ name: 'address_number', type: 'int', nullable: true })
  addressNumber: number;

  @Column({ name: 'address_complement', type: 'varchar', length: 64, nullable: true })
  addressComplement: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 20, nullable: true })
  postalCode: string;

  @Column({ name: 'origin_channel', type: 'enum', enum: originChannel, nullable: true })
  originChannel: originChannel;

  @Column({ name: 'utm_source', type: 'enum', enum: utmSource, nullable: true })
  utmSource: utmSource;

  @Column({ name: 'utm_medium', type: 'enum', enum: utmMedium, nullable: true })
  utmMedium: utmMedium;

  @Column({ name: 'utm_campaign', type: 'varchar', length: 100, nullable: true })
  utmCampaign: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}