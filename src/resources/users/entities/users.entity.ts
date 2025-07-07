import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {
  channelType,
  educationLevel,
  gender,
  jobPosition,
  maritialStatus,
  state
} from '../../../common/enums/enums';

@Entity({ name: 'users' })
export class User {

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
    name: 'job_position',
    type: 'enum',
    enum: jobPosition,
    nullable: false,
    comment: "User's job position"
  })
  jobPosition: jobPosition;

  @Column({
    name: 'channel_type',
    type: 'enum',
    enum: channelType,
    nullable: false,
    comment: 'Channel type through which the user operates'
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
    name: 'maritial_status',
    type: 'enum',
    enum: maritialStatus,
    nullable: true,
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
  addressNeighborhood?: string;

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