import { User } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {
  channelType,
  clientSector,
  educationLevel,
  gender,
  maritialStatus,
  state,
  utmMedium,
  utmSource,
} from '../../enums/index';

@Entity({ name: 'clients' })
export class Client {

  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({
    name: 'gov_id',
    type: 'varchar',
    length: 11,
    unique: true,
    nullable: false,
    comment: 'Government-issued identification number (CPF), 11 digits, unique'
  })
  govId: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 64,
    nullable: false
  })
  firstName: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 64,
    nullable: false
  })
  lastName: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 64,
    unique: true,
    nullable: false
  })
  email: string;

  @Column({
    name: 'phone_number',
    type: 'varchar',
    length: 64,
    unique: true,
    nullable: false
  })
  phoneNumber: string;

  @Column({
    name: 'channel_type',
    type: 'enum',
    enum: channelType,
    nullable: false,
    comment: 'Channel type through which the client was acquired (online, offline, etc.)'
  })
  channelType: channelType;

  @Column({
    name: 'birth_date',
    type: 'date',
    nullable: true
  })
  birthDate: Date;

  @Column({
    name: 'gender',
    type: 'enum',
    enum: gender,
    nullable: true
  })
  gender: gender;

  @Column({
    name: 'occupation',
    type: 'varchar',
    length: 64,
    nullable: true,
    comment: "Client's occupation or job title (optional)"
  })
  occupation: string;

  @Column({
    name: 'maritial_status',
    type: 'enum',
    enum: maritialStatus,
    nullable: true
  })
  maritialStatus: maritialStatus;

  @Column({
    name: 'education_level',
    type: 'enum',
    enum: educationLevel,
    nullable: true
  })
  educationLevel: educationLevel;

  @Column({
    name: 'wage',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true
  })
  wage: number;

  @Column({
    name: 'client_sector',
    type: 'enum',
    enum: clientSector,
    nullable: true
  })
  clientSector: clientSector;

  @Column({
    name: 'country',
    type: 'varchar',
    length: 64,
    default: 'brazil'
  })
  country: string;

  @Column({
    name: 'state',
    type: 'enum',
    enum: state,
    nullable: true
  })
  state: state;

  @Column({
    name: 'city',
    type: 'varchar',
    length: 64,
    nullable: true
  })
  city: string;

  @Column({
    name: 'address_neighborhood',
    type: 'varchar',
    length: 64,
    nullable: true
  })
  addressNeighborhood: string;

  @Column({
    name: 'address_street',
    type: 'varchar',
    length: 64,
    nullable: true
  })
  addressStreet: string;

  @Column({
    name: 'address_number',
    type: 'int',
    nullable: true
  })
  addressNumber: number;

  @Column({
    name: 'address_complement',
    type: 'varchar',
    length: 64,
    nullable: true,
    comment: 'Additional address information (optional)'
  })
  addressComplement: string;

  @Column({
    name: 'postal_code',
    type: 'varchar',
    length: 20,
    nullable: true
  })
  postalCode: string;

  @Column({
    name: 'utm_source',
    type: 'enum',
    enum: utmSource,
    nullable: true,
    comment: 'UTM source for marketing attribution (optional)'
  })
  utmSource: utmSource;

  @Column({
    name: 'utm_medium',
    type: 'enum',
    enum: utmMedium,
    nullable: true,
    comment: 'UTM medium for marketing attribution (optional)'
  })
  utmMedium: utmMedium;

  @Column({
    name: 'utm_campaign',
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: 'UTM campaign for marketing attribution (optional)'
  })
  utmCampaign: string;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_uuid' })
  userUuid: User;

  @Column({
    name: 'is_active',
    type: 'boolean',
    default: true
  })
  isActive: boolean;

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