import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CampaignChannel, CampaignStatus } from './enums/marketing.campaigns.enums';

@Entity({ name: 'marketing_campaigns' })
export class MarketingCampaign {

  @PrimaryGeneratedColumn('uuid', { name: 'uuid' }) 
  uuid: string;

  @Column({ name: 'campaign_name', type: 'varchar', length: 150, nullable: false })
  campaignName: string;

  @Column({ name: 'utm_campaign', type: 'varchar', length: 100, unique: true, nullable: false })
  utmCampaign: string;

  @Column({
    name: 'channel',
    type: 'enum',
    enum: CampaignChannel,
    nullable: false,
  })
  channel: CampaignChannel;

  @Column({ name: 'start_date', type: 'datetime', nullable: false })
  startDate: Date;

  @Column({ name: 'end_date', type: 'datetime', nullable: false })
  endDate: Date;

  @Column({
    name: 'budget',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: '0.00',
  })
  budget: number;

  @Column({ name: 'objective', type: 'varchar', length: 100, nullable: false })
  objective: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: CampaignStatus,
    default: CampaignStatus.DRAFT,
  })
  status: CampaignStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'notes', type: 'text', nullable: true })
  notes: string;
}