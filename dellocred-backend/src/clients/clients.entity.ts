import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn('uuid', {name: 'uuid'})
  uuid: string;

  @Column({ name: 'gov_id', unique: true })
  govId: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'address' })
  address: string;
  
  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}
