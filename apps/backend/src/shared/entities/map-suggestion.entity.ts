import { MapType } from '@dfcomps/contracts';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { WarcupAdminVote } from './warcup-admin-vote.entity';

@Entity({ name: 'map_suggestions' })
export class MapSuggestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  map_name: string;

  @Column({ type: 'integer' })
  suggestions_count: number;

  @Column({ type: 'varchar' })
  author: string;

  @Column({ type: 'varchar' })
  weapons: string;

  @Column({ type: 'boolean' })
  is_admin_suggestion: boolean;

  @Column({ type: 'varchar' })
  size: string;

  @Column({ type: 'varchar' })
  pk3_link: string;

  @Column({ type: 'varchar', nullable: true })
  map_type: MapType | null;

  @Column({ type: 'boolean', nullable: true })
  is_blacklisted: boolean;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => WarcupAdminVote, (warcupAdminVote) => warcupAdminVote.mapSuggestion)
  warcupAdminVotes: WarcupAdminVote[];
}
