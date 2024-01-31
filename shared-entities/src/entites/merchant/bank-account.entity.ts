import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Currency } from '../references/entities/currency.entity';
import { Merchant } from './merchant.entity';

@Entity()
export class BankAccount {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  account: string;

  @ManyToOne(() => Currency, (currency) => currency.bankAccounts)
  currency: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.bankAccounts)
  merchant: Merchant;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ default: true })
  active?: boolean;
}
