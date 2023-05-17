import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from '../../service/entities/service.entity';

@Entity()
export class Prompt {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  role: string

  @Column()
  message: string

  @ManyToOne(() => Service, service => service.id)
  @JoinColumn({name: 'service'})
  service: Service
}
