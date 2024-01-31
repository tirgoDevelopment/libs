import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../role/entities/role.entity';
import { Merchant } from './merchant.entity';
import { User } from '../users/user.entity';

@Entity()
export class MerchantUser {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: false })
  password: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: string;

  @Column({ nullable: true })
  email?: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.users)
  merchant: Merchant;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ default: new Date() })
  lastLogin?: Date;

  @Column({ nullable: true })
  resetPasswordCodeSentDate?: string;

  @Column({ nullable: true })
  resetPasswordCode?: string;

  @Column({ default: true })
  active?: boolean;
  
  @Column({ default: false })
  disabled?: boolean;

  @OneToOne(() => User, (user) => user.merchantUser)
  @JoinColumn({ name: 'user_id' })
  user?: User;
}
