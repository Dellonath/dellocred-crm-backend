import { Client } from 'src/clients/entities/clients.entity';
import { loanSaleStatus, loanType } from 'src/enums';
import { User } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'loan_sales' })
export class LoanSale {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid' })
  uuid: string;

  @ManyToOne(() => Client, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'client_uuid' })
  client: Client;

  @ManyToOne(() => User, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'user_uuid' })
  user: User;

  @Column({ name: 'loan_type', type: 'enum', enum: loanType, nullable: true })
  loanProduct: loanType;

  @Column({ name: 'loan_amount', type: 'decimal', precision: 14, scale: 2, nullable: false })
  loanAmount: number;

  @Column({ name: 'commission_percentage', type: 'decimal', precision: 5, scale: 2, nullable: false })
  commissionPercentage: number;

  @Column({ name: 'commission_amount', type: 'decimal', precision: 14, scale: 2, nullable: false })
  commissionAmount: number;

  @Column({
    name: 'status',
    type: 'enum',
    enum: loanSaleStatus,
    default: loanSaleStatus.PENDING,
  })
  status: loanSaleStatus;

  @Column({ name: 'sale_date', type: 'datetime', nullable: false })
  saleDate: Date;

  @Column({ name: 'notes', type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}