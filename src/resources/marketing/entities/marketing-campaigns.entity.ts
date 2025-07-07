import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { campaignStatus, channelType } from '../../../common/enums/enums';

@Entity({ name: 'marketing_campaigns' })
export class MarketingCampaign {

  @PrimaryGeneratedColumn('uuid') 
  uuid: string;

  @Column({
    name: 'campaign_name',
    type: 'varchar',
    length: 150,
    nullable: false,
    comment: 'Name of the marketing campaign'
  })
  campaignName: string;

  @Column({
    name: 'utm_campaign',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
    comment: 'UTM campaign identifier, unique'
  })
  utmCampaign: string;

  @Column({
    name: 'campaign_channel',
    type: 'enum',
    enum: channelType,
    nullable: false,
    comment: 'Channel where the campaign is run (e.g., online, offline)'
  })
  campaignChannel: channelType;

  @Column({
    name: 'start_date',
    type: 'date',
    nullable: false,
    comment: 'Start date of the campaign'
  })
  startDate: Date;

  @Column({
    name: 'end_date',
    type: 'date',
    nullable: false,
    comment: 'End date of the campaign'
  })
  endDate: Date;

  @Column({
    name: 'budget',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: '0.00',
    nullable: false,
    comment: 'Budget allocated for the campaign in BRL'
  })
  budget: number;

  @Column({
    name: 'objective',
    type: 'varchar',
    length: 100,
    nullable: false,
    comment: 'Objective or goal of the campaign'
  })
  objective: string;

  @Column({
    name: 'campaign_status',
    type: 'enum',
    enum: campaignStatus,
    default: campaignStatus.DRAFT,
    comment: 'Current status of the campaign (e.g., draft, active, completed)'
  })
  campaignStatus: campaignStatus;

  @Column({
    name: 'notes',
    type: 'text',
    nullable: true,
    comment: 'Additional notes or comments about the campaign'
  })
  notes: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Timestamp when the campaign was created'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    comment: 'Timestamp when the campaign was last updated'
  })
  updatedAt: Date;

}