import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ServiceSchema } from '../../service_schema/entities/service_schema.entity';
import { ServiceCategory } from '../../service_category/entities/service_category.entity';
import { IsDefined, IsNotEmpty } from 'class-validator';
import { Prompt } from '../../prompt/entities/prompt.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column({ default: 'test' })
  slug: string;

  @Column()
  description: string;

  @Column()
  icon: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @ManyToOne(() => ServiceSchema, (serviceSchema) => serviceSchema.id)
  @JoinColumn({ name: 'schema' })
  schema: ServiceSchema;

  @ManyToOne(() => ServiceCategory, (serviceCategory) => serviceCategory.id)
  @JoinColumn({ name: 'category' })
  category: ServiceCategory;

  @OneToMany(() => Prompt, (prompt) => prompt.service)
  @JoinColumn({ name: 'prompts' })
  prompts: Prompt[];
}
